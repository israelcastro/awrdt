import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import Navbar from '../../components/Navbar'
import { FormControl,  Input, Select, Stack, useBreakpointValue, useDisclosure, Text } from '@chakra-ui/react'
import {Button, FormLabel } from '@chakra-ui/react'
import axios from 'axios'
import ResponsiveTable from '../../components/ResponsiveTable'
import Body from '../../components/Body'
import { ProcessoService } from '../../services'
import Router from 'next/router'
import Pagination from '../../components/Pagination'
import AlertCustom from '../../components/AlertCustom'
import { AuthContext } from '../../contexts/AuthContext'

const LIMIT = 10;

export default function PainelDeProcessos(){
    const baseUrl = "http://localhost:3333"
    const [filtro, setFiltro] = useState('');
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([])
    const [localidade, setlocalidade] = useState([]);
    const [situacao, setsituacao] = useState([]);
    const [tabelaValor, setTabelaValor] = useState([])
    const [total, setTotal] = useState(0)

    const [toast, setToast] = useState({});

    const { callToast } = useContext(AuthContext)
    
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    useEffect(() => {        
        getProcesso()
        getLocalidade()
        getSituacao()
    }, [offset]);

    const getProcesso = async()=>{
        
        const response = await ProcessoService.listProcesses(offset, LIMIT)
        setData(response.data.results);
        setTabelaValor(response.data.results);
        setTotal(response.data.count)
    }
    
   const getLocalidade = async()=> {
        await axios.get(baseUrl+"/localidades")
        .then(response =>{
            setlocalidade(response.data)
        }).catch(error=>{
            console.log(error)
        })
   }
   const getSituacao = async()=>{
       await axios.get(baseUrl+"/situacoes")
       .then(response =>{
           setsituacao(response.data)
       }).catch(error=>{
           console.log(error)
       })
   }
    function selectSituacao(e){
        if(e.target.value === 'Todas'){
            return getProcesso()
        }else{
            //Chamar o endPoint atualiza situação
            //setupdateData(true)
            setTabelaValor(data.filter((item, key) =>{
                if(e.target.value == item.situacao){
                    return true;
                }else{
                    return false;
                }
            }))
        }        
    }

    function selectLocalidade(e){
        if(e.target.value === 'Todas'){
            return setTabelaValor(data)
        }else{
            setTabelaValor(data.filter((item, key) =>{
                if(e.target.value == item.localidadade ){
                    return true;
                }else{
                    return false;
                }
            }))
            
        }        
    }

    function filtroProcesso (e) {
        e.preventDefault();

        if(filtro == "" ){
            return setTabelaValor(data)
        }
        setTabelaValor(data.filter(intem =>{
            if(intem.processo == filtro){
                return true
            }else{
                return false;                
            }    
        }))       
        console.log('Você clicou em enviar. =>'+ filtro )        
    }

    function editFunction(id){
        
       /* Router.push({
            pathname: '/movimentos/create',
            query: { id: id },
        })*/
        Router.push({
            pathname: '/recuperacao_despesas',
            query: { id: id },
        })
    }

    async function deleteFunction(data?) {
        console.log(data) 
        //setToast(data);
        callToast('info', 'Registro deletado com sucesso')     
    }    

    const tableConfig = {
        head : {
            processo: {
                name: 'Processo',
                mobileHead: true
            },
            ocorrencia: {
                name: 'Ocorrência',
                mobileBody: true
            },
            alimentador: {
                name: 'Alimentador',
                mobileBody: true
            },
            situacao: {
                name: 'Situação',
                mobileBody: true
            },
            localidadade: {
                name: 'localidade',
                mobileBody: true
            },
            abertura: {
                name: 'Abertura',
                mobileBody: true
            },
            ultimaAcao: {
                name: 'Última ação',
                mobileBody: true
            },
            pop: {
                name: 'POP',
                mobileBody: true,
                isBoolean : true,
            },
            bo: {
                name: 'B.O',
                mobileBody: true,
                isBoolean : true,
            },
            condutor: {
                name: 'Condutor',
                mobileBody: true,
                isBoolean : true,
            },
            foto: {
                name: 'Foto',
                mobileBody: true,
                isBoolean : true,
            },
            orcamento: {
                name: 'Orçamento',
                mobileBody: true,
                isBoolean : true,
            },
            
        }
    }

    return(
        <>
            <Header />
            <Navbar />  
            <Body>             
                <Stack direction={['column', 'row']} spacing='24px'>            
                    <FormControl>            
                        <FormLabel htmlFor='processo'>Buscar Processo</FormLabel>
                        <Input id='processo' type='number' width='auto'
                        value={filtro}
                        onChange = {(ev) => setFiltro(ev.target.value)}
                        />
                        <Button onClick={filtroProcesso} colorScheme='teal' variant='delete' m='5px'>
                            Buscar 
                        </Button> 
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='situacao'>Situação</FormLabel>
                        <Select                
                            bg='white'
                            borderColor='black'
                            id='situacao'
                            onChange={(e) => selectSituacao(e)}
                        >
                            <option value='Todas' selected>Todas</option>
                            {situacao.map((item) =>{
                                return(
                                    <option key={item.id} value={item.value}>{item.value}</option>
                                )
                            }
                            )}
                        </Select>                                    
                    </FormControl> 
                    <FormControl>
                        <FormLabel htmlFor='situacao'>Localidade</FormLabel>
                        <Select
                            bg='white'
                            borderColor='black'
                            id='localidade'
                            onChange={(e) => selectLocalidade(e)}
                        >
                        <option value='Todas' selected>Todas</option>
                            {localidade.map((item) =>{
                                return(
                                    <option key={item.id} value={item.local}>{item.local}</option>
                                )
                            }
                            )}
                        </Select>                                    
                    </FormControl>
                </Stack>
                <ResponsiveTable 
                    datas={tabelaValor} 
                    tableConfig={tableConfig} 
                    isWideVersion={isWideVersion}
                    editFunction={editFunction}
                    deleteFunction={deleteFunction}
                    fieldBody={'processo'}
                    toast={toast}
                />

                {tabelaValor && (
                    <Pagination limit={LIMIT} total={total} offset={offset} setOffset={setOffset} />            
                )}

                



            </Body>
        </>
    )    
}