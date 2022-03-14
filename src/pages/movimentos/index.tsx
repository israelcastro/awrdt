import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import Navbar from '../../components/Navbar'
import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, FormControl,  Icon,  IconButton,  Input, Select, Stack } from '@chakra-ui/react'
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
    
    useEffect(() => {        
        getProcesso()
        getLocalidade()
        getSituacao()
    }, []);

    const getProcesso = async()=>{
        await axios.get(baseUrl+"/processos")
        .then(response =>{
            setData(response.data)
            setTabelaValor(response.data)
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

    return(
        <>
        <Header />
        <Navbar />  
              
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
        
            <Table variant='striped' colorScheme='blackAlpha'>            
                <Thead>
                    <Tr background={'#ccc'} color="black">
                        <Th >Processo</Th>
                        <Th >Ocorrência</Th>
                        <Th >Alimentador</Th>
                        <Th>Situação</Th>
                        <Th>Localidade</Th>
                        <Th>Abertura</Th>
                        <Th>Ultima Ação</Th>
                        <Th> POP</Th>
                        <Th> B.O</Th>
                        <Th>Condutor</Th>
                        <Th>Foto</Th>
                        <Th>Orçamento</Th>
                        <Th>Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    
                    {tabelaValor.map(valueTable =>{
                        return(
                            <Tr border="1px solid" key= {valueTable.processo}>
                                <Td >{valueTable.processo}</Td>
                                <Td >{valueTable.ocorrencia}</Td>
                                <Td >{valueTable.alimentador}</Td>
                                <Td>{valueTable.situacao}</Td>
                                <Td>{valueTable.localidadade}</Td>
                                <Td>{valueTable.abertura}</Td>
                                <Td>{valueTable.ultimaAcao}</Td>
                                <Td>
                                    {valueTable.pop == "true"
                                        ? <CheckCircleIcon color='green' />
                                        : <NotAllowedIcon color='red' />
                                    }
                                </Td>
                                <Td>
                                    {valueTable.bo == true
                                        ? <CheckCircleIcon color='green' />
                                        : <NotAllowedIcon color='red' />
                                    }
                                </Td>
                                <Td textAlign={"center"}>
                                    {valueTable.condutor == true
                                        ? <CheckCircleIcon color='green' />
                                        : <NotAllowedIcon color='red' />
                                    }
                                </Td>
                                <Td>
                                    {valueTable.foto == true
                                        ? <CheckCircleIcon color='green' />
                                        : <NotAllowedIcon color='red' />
                                    }
                                </Td>
                                <Td>
                                    {valueTable.orcamento == true
                                        ? <CheckCircleIcon color='green' />
                                        : <NotAllowedIcon color='red' />
                                    }
                                </Td>
                                <Td>
                                    <IconButton
                                        variant='solid'
                                        colorScheme='orange'
                                        aria-label='Send email'
                                        icon={<EditIcon />}
                                        />
                                </Td>
                            </Tr>
                        );
                    })}                                     
                </Tbody>
                {tabelaValor.length === 0 &&                       
                    <Stack spacing={8}>
                     <Alert status='error'>
                       <AlertIcon />
                       Não há resultados para o valor filtrado!
                     </Alert>
                    </Stack>
                }
            </Table>
            
        </>
    )    
}