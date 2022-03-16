import { CheckCircleIcon, EditIcon, NotAllowedIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { Text, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, ListItem, Table, Tbody, Td, Th, Thead, Tr, UnorderedList, Stack, HStack, Flex, SimpleGrid, IconButton } from "@chakra-ui/react";


interface TableConfigProps {
    head: Object
}

interface ResponsiveTableProps {
    datas: Array<Object>, 
    tableConfig: TableConfigProps, 
    isWideVersion: boolean,
    editFunction?: any,
    deleteFunction?: any,
    viewFunction?: any,
}


const Head = ({ keys, tableConfig, bolAction = true }) => {
    const tableHead = tableConfig?.head || {}
    return (
        <Thead>
            <Tr background={'#ccc'} color="black">
                {
                    keys.map( key => <Th textAlign="center" key={key}>{ tableHead[key]?.name || key }</Th> )
                }
                {bolAction && <Th textAlign="center">Ação</Th>}
            </Tr>
        </Thead>
    )
}

const Row = ({ line, tableConfig, bolAction = true, editFunction, deleteFunction, viewFunction }) => {
    const keys = Object.keys(tableConfig?.head)
    return(        
        <Tr key={line}>
            { keys.map(key =>
                <Td textAlign="center" key={key}>
                    { 
                        typeof line[key] == "boolean" ? 
                            (line[key] == true ? <CheckCircleIcon color='green' /> : <NotAllowedIcon color='red' />)  
                            : (line[key])
                    }
                </Td>                                 
            ) }

            
            {bolAction && 
                <Td textAlign="center"> 
                    <HStack spacing={1} justifyContent="center">
                        {editFunction && <IconButton size="xs" onClick={() => editFunction(line.id)} aria-label='Editar' icon={<EditIcon />} fontSize="xs" /> }
                        {deleteFunction && <IconButton size="xs" onClick={() => deleteFunction(line.id)} variant='delete' aria-label='Deletar' icon={<DeleteIcon />} fontSize="xs" /> }
                        {viewFunction && <IconButton size="xs" onClick={() => viewFunction(line.id)} variant='outline'  aria-label='Visualizar' icon={<ViewIcon />} fontSize="xs" /> }
                    </HStack>
                </Td>
            }                         
        </Tr>
    ) 
}

const Item = ({ tableConfig, line, bolAction = true, bgColor="", editFunction, deleteFunction, viewFunction }) => {
    const tableHead = tableConfig?.head || {}
    const keys = Object.keys(tableConfig?.head)
    let headItems = ''
    let bodyItems = ''
    return (
        <AccordionItem bg={bgColor}>
            <h2>
                <AccordionButton _expanded={{ bg: 'blue.600', color: 'white' }}>
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
            </h2>
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
                                            typeof line[key] == "boolean" ? 
                                            (line[key] == true ? <CheckCircleIcon color='green' /> : <NotAllowedIcon color='red' />)  
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
                                {editFunction && <IconButton size="xs" onClick={() => editFunction(line.id)} aria-label='Editar' icon={<EditIcon />} /> }
                                {deleteFunction && <IconButton size="xs" onClick={() => deleteFunction(line.id)} variant='delete' aria-label='Deletar' icon={<DeleteIcon />} /> }
                                {viewFunction && <IconButton size="xs" onClick={() => viewFunction(line.id)} variant='outline'  aria-label='Visualizar' icon={<ViewIcon />} /> }
                            </HStack> 
                        </SimpleGrid>
                    } 
            </AccordionPanel>
        </AccordionItem>
    )
}

function Feature({ title, desc, ...rest }) {
    return (
      <Flex p={5} {...rest} flex={1} >
        <Heading fontSize='md'>{title + ': '}</Heading>
        <Text>{desc}</Text>
      </Flex>
    )
  }


const ResponsiveTable 
    = ({ datas, tableConfig, isWideVersion = true, editFunction, deleteFunction, viewFunction } : ResponsiveTableProps) => {
    const keys = Object.keys(tableConfig?.head)  
    const bolAction = editFunction || deleteFunction || viewFunction ? true : false; 
    return(
        <>
            { isWideVersion && (
                <Table size='sm' variant='striped' colorScheme='blackAlpha' mt={4}>
                    <Head keys={keys} tableConfig={tableConfig}/>
                    <Tbody>
                        { datas.map((line, i) => <Row key={i} line={line} tableConfig={tableConfig} bolAction={bolAction} editFunction={editFunction} deleteFunction={deleteFunction} viewFunction={viewFunction} />) }                        
                    </Tbody>
                </Table>
            )}

            { !isWideVersion && (
                <Accordion allowToggle mt={4}>
                    { datas.map( (line,i) => <Item key={i} bgColor={ i%2 == 0 ? "#F0F0F0" : "#FFFFFF" } tableConfig={tableConfig} line={line} bolAction={bolAction} editFunction={editFunction} deleteFunction={deleteFunction} viewFunction={viewFunction}/> ) }                                            
                </Accordion>
            )}
        </>
    )
}

export default ResponsiveTable;

