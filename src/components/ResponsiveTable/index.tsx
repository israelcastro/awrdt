import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ListItem, Table, Tbody, Td, Th, Thead, Tr, UnorderedList } from "@chakra-ui/react";

const Head = ({ keys, tableConfig }) => {
    const tableHead = tableConfig?.head || {}
    return (
        <Thead>
            <Tr>
                {
                    keys.map( key => <Th key={key}>{ tableHead[key]?.name || key }</Th> )
                }
                <Th></Th>                    
            </Tr>
        </Thead>
    )
}

const Row = ({ line, tableConfig, func }) => {
    const keys = Object.keys(tableConfig?.head)
    return(
        <Tr key={line}>
            { keys.map(key => <Td key={key}>{ line[key] }</Td> ) } 
            <Td onClick={ () =>{ func(line) } }>Teste</Td>            
        </Tr>
    ) 
}

const Item = ({ tableConfig, line }) => {
    const tableHead = tableConfig?.head || {}
    const keys = Object.keys(tableConfig?.head)
    let headItems = ''
    let bodyItems = ''
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        { keys.map(key => {
                            if(tableHead[key]?.mobileHead){
                                headItems += tableHead[key].name + ': ' + line[key]                                                                  
                            }
                        })}
                        {headItems} 
                    </Box>
                    <AccordionIcon /> 
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <UnorderedList>
                    { keys.map(key => {
                        if(tableHead[key]?.mobileBody){
                            return(
                                <ListItem>
                                    {tableHead[key].name + ': ' + line[key]}
                                </ListItem>
                            )                                                                  
                        }
                    })}
                    
                </UnorderedList>
            </AccordionPanel>
        </AccordionItem>
    )
}


const ResponsiveTable = ({ datas, tableConfig, isWideVersion = true, func }) => {
    const keys = Object.keys(tableConfig?.head) 
    //const keys = ['id','last','name','Campo01','Campo02','Campo03']
    return(
        <>
            { isWideVersion && (
                <Table>
                    <Head keys={keys} tableConfig={tableConfig}/>
                    <Tbody>
                        { datas.map(line => <Row func={func} line={line} tableConfig={tableConfig}/>) }                        
                    </Tbody>
                </Table>
            )}

            { !isWideVersion && (
                <Accordion allowToggle>
                    { datas.map(line => <Item tableConfig={tableConfig} line={line}/> ) }                        
                    
                </Accordion>
            )}
        </>
    )
}

export default ResponsiveTable;

