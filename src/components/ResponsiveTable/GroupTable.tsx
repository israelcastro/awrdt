import { AddIcon, DeleteIcon, EditIcon, MinusIcon, ViewIcon } from "@chakra-ui/icons"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Flex, Heading, HStack, IconButton, SimpleGrid, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react"
import { useState } from "react"
import AlertCustom from "../AlertCustom";

interface GroupTableProps {
    datas : Array<Object>
    tableConfig : Object
    editFunction? : Function
    deleteFunction? : Function
    viewFunction? : Function
}

const GroupTable = ({ datas, tableConfig, editFunction, deleteFunction, viewFunction }:GroupTableProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState({});
    const [headerAlert, setHeaderAlert] = useState({});
    const [bodyAlert, setBodyAlert] = useState({});
    const bolAction = editFunction || deleteFunction || viewFunction ? true : false;

    async function modalDelete(data?) {
        await setData(data)
        await setHeaderAlert("Deseja delatar o processo?")
        await setBodyAlert('Processo nº: ' + 'data[fieldBody]')
        await onOpen()        
    }


    return (
        <>
            <Box border='1px' borderColor='gray.200' mt={2}> 
                <Accordion allowMultiple size='sm'> 
                    { datas.map( (line,i) => <Item bgColor={ i%2 == 0 ? "#F0F0F0" : "#FFFFFF" } key={i} datas={line} tableConfig={tableConfig} bolAction={bolAction} editFunction={editFunction} deleteFunction={deleteFunction} viewFunction={viewFunction} modalDelete={modalDelete}/> ) }                                            
                </Accordion>
            </Box>

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
}

const Item = ({datas,tableConfig,editFunction,deleteFunction,viewFunction,bolAction,bgColor,modalDelete}) => {
    return (
        
            
        <AccordionItem border={0} bgColor={bgColor}>
            {({ isExpanded }) => (
                <>
                    <ItemHeader isExpanded={isExpanded} datas={datas} tableConfig={tableConfig} bolAction={bolAction} editFunction={editFunction} deleteFunction={deleteFunction} viewFunction={viewFunction}/>
                    <ItemPanel datas={datas} tableConfig={tableConfig} bolAction={bolAction} editFunction={editFunction} deleteFunction={deleteFunction} viewFunction={viewFunction} modalDelete={modalDelete}/>            
                </>
            )}
        </AccordionItem>
           
    )
}

const ItemHeader = ({datas,tableConfig,editFunction,deleteFunction,viewFunction,bolAction,isExpanded}) => {
    const keys = Object.keys(tableConfig?.head)
    return (
        <AccordionButton _expanded={{ bg: 'blue.600', color: 'white' }} _focus={{ boxShadow: 'none' }}>
            <Flex flex='1' textAlign='left'>
                <Stack>
                    {keys.map((key, i) => 
                        tableConfig.head[key].headerGroup && 
                            <ItemHeaderContent 
                                valueK={tableConfig.head[key].name || key} 
                                value={datas[key]} 
                                bolAction={bolAction} editFunction={editFunction} deleteFunction={deleteFunction} viewFunction={viewFunction}
                            />
                    )}
                </Stack>
            </Flex>
            {isExpanded ? (
              <MinusIcon fontSize='10px' />
            ) : (
              <AddIcon fontSize='10px' />
            )}
        </AccordionButton>
    )
}

const ItemHeaderContent = ({valueK,value,editFunction,deleteFunction,viewFunction,bolAction}) => {
    return (
        <Flex>
            <Text fontWeight='bold' mr={2}>{valueK + ': '}</Text>
            <Text>{value}</Text>
        </Flex>
    )
}

const ItemPanel = ({datas,tableConfig,editFunction,deleteFunction,viewFunction,bolAction,modalDelete}) => {
    const isWideVersion = useBreakpointValue({
        base: false,
        md: false,
        lg: true
    });

    return (
        <AccordionPanel>
            {isWideVersion &&
                <TableAccordion datas={datas} tableConfig={tableConfig} bolAction={bolAction} editFunction={editFunction} deleteFunction={deleteFunction} viewFunction={viewFunction} modalDelete={modalDelete}/>
            }

            {!isWideVersion && (
                // <AccordionBody datas={datas.items} tableConfig={tableConfig} bolAction={bolAction} editFunction={editFunction} deleteFunction={deleteFunction} viewFunction={viewFunction} modalDelete={modalDelete}/>
                datas.items.map((line, i) => <AccordionBody datas={datas.items} index={i} tableConfig={tableConfig} bolAction={bolAction} editFunction={editFunction} deleteFunction={deleteFunction} viewFunction={viewFunction} modalDelete={modalDelete}/>)                                                                                             
            )}

            <AccordionFooter datas={datas} tableConfig={tableConfig}/>
            
        </AccordionPanel>
    )
}

const TableAccordion = ({datas,tableConfig,editFunction,deleteFunction,viewFunction,bolAction,modalDelete}) => {
    

    return (        
        <Table size='xs' variant='striped' colorScheme='blackAlpha' mt={4}>
            <TableHead tableConfig={tableConfig} bolAction={bolAction} editFunction={editFunction} deleteFunction={deleteFunction} viewFunction={viewFunction}/> 
            <Tbody>
                { datas.items.map((line, i) => <TableBody datas={datas} index={i} tableConfig={tableConfig} bolAction={bolAction} editFunction={editFunction} deleteFunction={deleteFunction} viewFunction={viewFunction} modalDelete={modalDelete}/>) }                                                                
            </Tbody>                  
            <Footer datas={datas} tableConfig={tableConfig} bolAction={bolAction}/>
        </Table>
    )
}

const TableHead = ({tableConfig, editFunction,deleteFunction,viewFunction,bolAction}) => {
    const tableHead = tableConfig?.items.structure || {}
    const keys = Object.keys(tableHead) 
    return (
        <Thead>
            <Tr background={'#ccc'} fontSize={[10,13]} >
                {
                    keys.map( key => <Th textAlign="center" key={key}>{ tableHead[key]?.name || key }</Th> )
                }
                {bolAction && <Th fontSize={[10,12]} textAlign="center">Ação</Th>}
            </Tr>
        </Thead>
    )
}

const TableBody = ({datas, tableConfig, editFunction,deleteFunction,viewFunction,bolAction, index, modalDelete}) => {
    const tableHead = tableConfig?.items || {}
    const keys = Object.keys(tableHead.structure) 
    const data = datas.items[index];
     
    return (  
        <Tr >
            { keys.map(key => <Td textAlign="center">{data[key]}</Td>) }
            {bolAction && 
                <Td textAlign="center"> 
                    <HStack spacing={1} justifyContent="center">
                        {editFunction && <IconButton size="xs" onClick={() => editFunction(data)} aria-label='Editar' icon={<EditIcon />} fontSize="xs" /> }
                        {deleteFunction && <IconButton size="xs" onClick={() => modalDelete(data)} variant='danger' aria-label='Deletar' icon={<DeleteIcon />} fontSize="xs" /> }
                        {viewFunction && <IconButton size="xs" onClick={() => viewFunction(data)} variant='success'  aria-label='Visualizar' icon={<ViewIcon />} fontSize="xs" /> }
                    </HStack>
                </Td>
            }
        </Tr>
    )
}

const AccordionBody = ({datas,tableConfig,editFunction,deleteFunction,viewFunction,bolAction,modalDelete,index}) => {
    const tableHead = tableConfig?.items.structure || {}
    const keys = Object.keys(tableHead) 
    const data = datas[0]; 

    return (
        <>
            <AccordionPanel p={1}>                 
                { keys.map( (key,i) => {
                    if(tableHead[key]?.mobileBody){
                        return(
                            <SimpleGrid columns={2} key={i} alignItems="center" justifyContent="center" mt={2}>
                                <Box>                                        
                                    <Heading fontSize='sm'>{tableHead[key].name || key + ': '}</Heading>
                                </Box>
                                <Box fontSize="sm">
                                    {data[key]}                                    
                                </Box>
                            </SimpleGrid >                        
                        )                                                                  
                    }
                })           
                
                }

                {bolAction && 
                    <SimpleGrid columns={2} mt={10} >
                        <Heading fontSize='sm'>Ações</Heading>
                        <HStack spacing={1} justifyContent="center">
                            {editFunction && <IconButton size="xs" onClick={() => editFunction(datas)} aria-label='Editar' icon={<EditIcon />} /> }
                            {deleteFunction && <IconButton size="xs" onClick={() => modalDelete(datas)} variant='danger' aria-label='Deletar' icon={<DeleteIcon />} /> }
                            {viewFunction && <IconButton size="xs" onClick={() => viewFunction(datas)} variant='success'  aria-label='Visualizar' icon={<ViewIcon />} /> }
                        </HStack> 
                    </SimpleGrid>
                } 
        </AccordionPanel>
        <Divider />
    </>
    )
}

const AccordionFooter = ({datas, tableConfig}) => {
    const tableHead = tableConfig?.head || {}
    const keys = Object.keys(tableHead)
    
    return (
        <VStack>
            {keys.map((key,i) =>
                tableHead[key].footer && 
                <Flex direction='row'>
                    <Text fontSize="sm" fontWeight="bold">{tableHead[key].name + ': '}</Text>
                    <Text fontSize="sm">{datas[key]}</Text>  
                </Flex>
            )}           
        </VStack>
    )
}

const Footer = ({datas, tableConfig, bolAction}) => {
    const tableHead = tableConfig?.items.structure || {}
    const keys = Object.keys(tableHead)
    
    return (
        <>
            <Tr bg="transparent" border={0}><Td p={3} border={0}></Td></Tr>
            <Tr bg="gray.100">
                { keys.map((key,i) =>
                    <Td textAlign="center" p={2}>
                    <Heading variant="h4">
                        { (datas[tableHead[key].group] && 'R$ ' + datas[tableHead[key].group])}
                        </Heading>
                    </Td>
                )}
                 {bolAction && <Td fontSize={[10,12]} textAlign="center"></Td>}
            </Tr>
           
        </>
    )
}

export default GroupTable