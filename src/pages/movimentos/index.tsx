import { useState } from 'react'
import { Header } from '../../components/Header'
import Navbar from '../../components/Navbar'
import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons'
import { FormControl, Grid, GridItem, HStack, Input, Select, Stack } from '@chakra-ui/react'
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
import { Item } from 'framer-motion/types/components/Reorder/Item'

const situacao = [
    {id:0, valor: 'Novo'},
    {id:1, valor: 'Cancelado'},
    {id:2, valor: 'Em andamento'}
]
const valueTables = [
   {
    processo:1,
    ocorrência: 90123456,
    alimentador: 54564,
    situacao: "Novo",
    localidadade: "Cuiaba",
    abertura: "10/12/2021",
    ultimaAcao:"08/03/2022",
    pop: "true",
    bo: true,
    condutor: true,
    foto: false,
    orcamento: false
   },
   {
    processo:2,
    ocorrência: 90123456,
    alimentador: 54564,
    situacao: "Cancelado",
    localidadade: "Cuiaba",
    abertura: "10/12/2021",
    ultimaAcao:"08/03/2022",
    pop: "false",
    bo: false,
    condutor: true,
    foto: false,
    orcamento: false
   },
   {
    processo:3,
    ocorrência: 90123456,
    alimentador: 54564,
    situacao: "Em andamento",
    localidadade: "Cuiaba",
    abertura: "10/12/2021",
    ultimaAcao:"08/03/2022",
    pop: "true",
    bo: false,
    condutor: false,
    foto: true,
    orcamento: true
   }

]
export default function PainelDeProcessos(){
    const [filtro, setFiltro] = useState(0);
    const [tabelaValor, setTabelaValor] = useState(valueTables)
    console.log(filtro);
    
    function selectSituacao(e){
        console.log(e.target.value+ ">> dentro da função")
        console.log(e.target)
        /*if(e.target.value === 'Todas'){
            return setTabelaValor(valueTables)
        }else{
            
            setTabelaValor(valueTables.filter(intem =>{
                if(intem.situacao == e.target.value){
                    return true
                }else{
                    return false;                
                }    
            }))   
        }*/
    }

   function handleClick (e) {
        e.preventDefault();
       
        setTabelaValor(valueTables.filter(intem =>{
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
                <Input id='processo' type='number' width={[2,4]}
                value={filtro}
                onChange = {(ev) => setFiltro(ev.target.value)}
                />
                <Button onClick={handleClick} colorScheme='teal' variant='outline' m='5px'>
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
                    <option value='Todas'>Todas</option>
                      {situacao.map((item) =>{
                        return(
                            <option key={item.id} value={item.id}>{item.valor}</option>
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
                id='localidade' placeholder='localidade' >
                  
                    <option value='option1'>Option 1</option>
                </Select>                                    
            </FormControl>
        </Stack>
        
            <Table variant='striped' colorScheme='blackAlpha'>            
                <Thead>
                    <Tr background={'#ccc'} color="black">
                        <Th isNumeric>Processo</Th>
                        <Th isNumeric>Ocorrência</Th>
                        <Th isNumeric>Alimentador</Th>
                        <Th>Situação</Th>
                        <Th>Localidade</Th>
                        <Th>Abertura</Th>
                        <Th>Ultima Ação</Th>
                        <Th> POP</Th>
                        <Th> B.O</Th>
                        <Th>Condutor</Th>
                        <Th>Foto</Th>
                        <Th>Orçamento</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tabelaValor.map(valueTable =>{
                        return(
                            <Tr border="1px solid" key= {valueTable.processo}>
                                <Td isNumeric>{valueTable.processo}</Td>
                                <Td isNumeric>{valueTable.ocorrência}</Td>
                                <Td isNumeric>{valueTable.alimentador}</Td>
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
                            </Tr>
                        );
                    })}                 
                </Tbody>
            </Table>
            
        </>
    )    
}