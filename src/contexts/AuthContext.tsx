import {  createContext, ReactNode, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import  Router  from 'next/router'
import { api } from '../services/base/apiClient';
import { Flex, useToast } from '@chakra-ui/react';
import ToastCustom from '../components/ToastCustom';

type User = {
    email: string;
    name: string;
    permissions: string[];
    roles : string[];
}

//informações que existiram dentro do contexto
type SignInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
    signIn(credentials: SignInCredentials) : Promise<void>;
    signOut: () => void;
    user: User;
    isAuthenticated: boolean;
    callToast: (type : string, msg : string) => void;
};

type AuthProviderProps = {
    children : ReactNode
}

type toastProps = {
    type: any,
    msg : any,
}

export const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel



export function signOut(){
    destroyCookie(undefined, 'nextauth.token')  
    destroyCookie(undefined, 'nextauth.refreshToken')

    authChannel.postMessage('signOut');

    Router.push('/')
}

export function AuthProvider({ children }){
    const [user, setUser] = useState<User>()
    const isAuthenticated = !!user;
    const toast = useToast()
    
    useEffect(() =>{
        authChannel = new BroadcastChannel('auth')   

        authChannel.onmessage = (message) =>{
            switch (message.data) {
                case 'signOut':
                    signOut();
                    break;
                default:
                    break;
            }
        }
    }, [])

    useEffect(() => {
        const { 'nextauth.token': token} = parseCookies()

        if(token) {
            api.get('/me')
                .then(response => {
                    const { email, name, permissions, roles } = response.data

                    setUser({email, name, permissions, roles})
                })
                .catch(error =>{
                    signOut();
                })
        }
    },[]) 

    async function signIn({ email, password }: SignInCredentials){
        try{
            const response = await api.post('sessions', {
                email,
                password
            })

            const { token, refreshToken, permissions, roles, name} = response.data;

            // sessionStorage - se o usuário fecha o navegador e abre ele morre (dura apenas na sessão)
            // localStorage - mesmo reiniciando o pc, ele permanece, mas o next não é apenas browser pois é SSR, o servidor não tem acesso ao localstorage 
            // cookies - melhor opção com o next (browser e servidor tem acesso)
            
            setCookie(undefined, 'nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30, //30 days
                path: '/', //quais caminhos tem acesso a esse cookie
            })
            setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
                maxAge: 60 * 60 * 24 * 30, //30 days
                path: '/', //quais caminhos tem acesso a esse cookie
            })
            
            setUser({
                email,
                name,
                permissions,
                roles,
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            Router.push('/dashboard');
        } catch(err) {
            console.log(err)
        }        
    }

    async function callToast(type : any, msg : string){
        toast({
            position: 'bottom-left',
            render: ({onClose}) =>(
                <ToastCustom type={type} msg={msg} onClose={onClose} />                    
            ),
            isClosable: true,
        })
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user, callToast}}>
            {children}
        </AuthContext.Provider>
    )
}