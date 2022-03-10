import { Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Header } from "../components/Header";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthContext";
import { useCan } from "../hooks/useCan";
import { api } from "../services/apiClient";

export default function Dashboard(){
    const { user, signOut } = useContext(AuthContext)

    const userCanSeeMetrics = useCan({
        roles: ['editor']
    })

    useEffect(() => {
        api.get('/me')
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }, [])

    return( 
        <>
            <Header />            
            <Navbar />            

            { userCanSeeMetrics && <div>Dashdoard</div> }
            { !userCanSeeMetrics && <div>Sem permissão</div> }

            <button onClick={signOut}>Sign Out</button>
        </>
    )    
} 

