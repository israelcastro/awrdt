import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import Navbar from '../../components/Navbar'
import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, FormControl,  Icon,  IconButton,  Input, Select, Stack, useBreakpointValue } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,   
    Button,
    FormLabel
  } from '@chakra-ui/react'
  import { EditIcon } from '@chakra-ui/icons'
import axios from 'axios'
import ResponsiveTable from '../../components/ResponsiveTable'
import Body from '../../components/Body'



export default function PainelDeProcessos(){
    const baseUrl = "http://localhost:3333"
    const [filtro, setFiltro] = useState('');
    //const [valorSituacao, setvalorSituacao] = useState('');
    //variavel de auxilio
    const [data, setData] = useState([])
    const [localidade, setlocalidade] = useState([]);
    const [situacao, setsituacao] = useState([]);
    const [tabelaValor, setTabelaValor] = useState([])
    console.log(filtro);
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });
    
    useEffect(() => {        
        getProcesso()
        getLocalidade()
        getSituacao()
        console.log(tabelaValor)
    }, []);

    const getProcesso = async()=>{
        await axios.get(baseUrl+"/processos")
        .then(response =>{
            setData(response.data)
            setTabelaValor(response.data)
            console.log(tabelaValor)
        }).catch(error=>{
            console.log(error)
        });
    }
    
   const getLocalidade = async()=>{
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
        console.log(e.target.value+ ">> dentro da função")
        if(e.target.value === 'Todas'){
            return getProcesso()
        }else{
            //Chamar o endPoint atualiza situação
            //setupdateData(true)
            setTabelaValor(data.filter((item, key) =>{
                console.log(e.target.value+" <meu teste> "+ item.situacao)
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
            //console.log(JSON.stringify(tabelaValor)+"<<<tabela")
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

    function editFunction(e){
        console.log('Função criada para editar', e.target.value)
    }

    function deleteFunction() {
        console.log('Função criada para deletar')
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
                mobileBody: true
            },
            bo: {
                name: 'B.O',
                mobileBody: true
            },
            condutor: {
                name: 'Condutor',
                mobileBody: true
            },
            foto: {
                name: 'Foto',
                mobileBody: true
            },
            orcamento: {
                name: 'Orçamento',
                mobileBody: true
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
                        <Button onClick={filtroProcesso} colorScheme='teal' variant='outline' m='5px'>
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
                                    <option key={item.id} value={item.situacao}>{item.situacao}</option>
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
                />
            </Body>
        </>
    )    
}