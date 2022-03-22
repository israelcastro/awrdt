import { CheckCircleIcon, EditIcon, NotAllowedIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { Text, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Table, Tbody, HStack, Flex, SimpleGrid, IconButton, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import AlertCustom from "../AlertCustom";
import { HeadCustom } from "./components/HeadCustom";
import { RowCustom } from "./components/RowCustom";
import { TableCustom } from "./components/TableCustom";
import { IResponsiveTable } from "./IResponsiveTable";


const Item = ({ tableConfig, line, bolAction = true, bgColor="", editFunction, deleteFunction, viewFunction, modalDelete }) => {
    const tableHead = tableConfig?.head || {}
    const keys = Object.keys(tableConfig?.head)
    let headItems = ''
    let bodyItems = ''
    return (
        <AccordionItem bg={bgColor} border={0}>
                <AccordionButton _expanded={{ bg: 'blue.600', color: 'white' }} _focus={{ boxShadow: 'none' }} pb={0} pt={0}>
                    <HStack  flex='1' textAlign='left'>
                        { keys.map( (key, i) => {
                            if(tableHead[key]?.mobileHead){
                                return(
                                    <Feature
                                        key={i}
                                        title={tableHead[key].name}
                                        desc={line[key]}
                                    />
                                )                                                                                                  
                            }
                        })}
                        
                    </HStack >
                    <AccordionIcon /> 
                </AccordionButton>
         
            <AccordionPanel pb={4} ml={8} mt={2}>                
                    { keys.map( (key,i) => {
                        if(tableHead[key]?.mobileBody){
                            return(
                                <SimpleGrid columns={2} key={i}>
                                    <Box>                                        
                                        <Heading fontSize='sm'>{tableHead[key].name + ': '}</Heading>
                                    </Box>
                                    <Box>
                                        {
                                            typeof line[key] == "boolean" || tableConfig?.head[key].isBoolean ? 
                                            (line[key] == true || line[key] ? <CheckCircleIcon color='green' /> : <NotAllowedIcon color='red' />)  
                                            : (tableConfig?.head[key].child) ? <Text>{line[key][tableConfig?.head[key].child]}</Text>
                                            : <Text>{line[key]}</Text>
                                        }                                      
                                    </Box>
                                </SimpleGrid >
                            )                                                                  
                        }
                    })}

                    {bolAction && 
                        <SimpleGrid columns={2} mt={10}>
                            <Heading fontSize='sm'>Ações</Heading>
                            <HStack spacing={1} justifyContent="center">
                                {editFunction && <IconButton size="xs" onClick={() => editFunction(line)} aria-label='Editar' icon={<EditIcon />} /> }
                                {deleteFunction && <IconButton size="xs" onClick={() => modalDelete(line)} variant='danger' aria-label='Deletar' icon={<DeleteIcon />} /> }
                                {viewFunction && <IconButton size="xs" onClick={() => viewFunction(line)} variant='success'  aria-label='Visualizar' icon={<ViewIcon />} /> }
                            </HStack> 
                        </SimpleGrid>
                    } 
            </AccordionPanel>
        </AccordionItem>
    )
}

function Feature({ title, desc, ...rest }) {
    return (
      <Flex p={5} {...rest} flex={1} alignItems="center" >
        <Text fontSize='lg' fontWeight="bold">{title + ': '}</Text>
        <Text ml={2}>{desc}</Text>
      </Flex>
    )
  } 


const ResponsiveTable 
    = ({ datas = [], tableConfig, editFunction, deleteFunction, viewFunction, fieldBody, typeTable = 'normal' } : IResponsiveTable) => {
    const keys = Object.keys(tableConfig?.head)  
    const bolAction = editFunction || deleteFunction || viewFunction ? true : false; 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState({});
    const [headerAlert, setHeaderAlert] = useState({});
    const [bodyAlert, setBodyAlert] = useState({});
    const isWideVersion = useBreakpointValue({
        base: false,
        md: false,
        lg: true
    });
    
    async function modalDelete(data?) {
        await setData(data)
        await setHeaderAlert("Deseja delatar o processo?")
        await setBodyAlert('Processo nº: ' + data[fieldBody])
        await onOpen()        
    }    

    try {
               
        
        return(        
            <>  
                
                { isWideVersion  && (
                    <TableCustom datas={datas} tableConfig={tableConfig} editFunction={editFunction} deleteFunction={deleteFunction} viewFunction={viewFunction} modalDelete={modalDelete} typeTable={typeTable}/>                
                )}

                { !isWideVersion && (
                    <Accordion allowToggle mt={4} size='sm'>
                        { datas.map( (line,i) => <Item key={i} bgColor={ i%2 == 0 ? "#F0F0F0" : "#FFFFFF" } tableConfig={tableConfig} line={line} bolAction={bolAction} editFunction={editFunction} modalDelete={modalDelete} deleteFunction={deleteFunction} viewFunction={viewFunction}/> ) }                                            
                    </Accordion>
                )}

                <AlertCustom
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    headerAlert={headerAlert}
                    bodyAlert={bodyAlert} 
                    actionConfirm={deleteFunction}                
                    data={data}
                />



            </>
        )
    } catch (error) {
        return (
            <>
                <Flex flex={1} justifyContent="center" m={20}>
                    <Heading variant="h3" color="red">Erro ao criar tabela</Heading>
                </Flex>                 
            </>
        )
    }


    
}

export default ResponsiveTable;



 

