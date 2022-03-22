import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Table, Tbody, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import AlertCustom from "../../AlertCustom";
import { HeadCustom } from "./HeadCustom";
import { RowCustom } from "./RowCustom";

export const TableCustom = ({ datas = [], tableConfig, editFunction, deleteFunction, viewFunction, modalDelete, typeTable }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const keys = Object.keys(tableConfig?.head)  
    const bolAction = editFunction || deleteFunction || viewFunction ? true : false;
    const [data, setData] = useState({});
    const [headerAlert, setHeaderAlert] = useState({});
    const [bodyAlert, setBodyAlert] = useState({});

    
    return(
        <>
            {typeTable == 'normal' && (
                
                    <Table size='xs' variant='striped' colorScheme='blackAlpha' mt={4}>
                        <HeadCustom keys={keys} tableConfig={tableConfig} bolAction={bolAction}/>
                        <Tbody>
                            { datas.map((line, i) => <RowCustom key={i} line={line} tableConfig={tableConfig} bolAction={bolAction} editFunction={editFunction} modalDelete={modalDelete} deleteFunction={deleteFunction} viewFunction={viewFunction} />) }                        
                        </Tbody>
                    </Table> 
                
            )}

            {typeTable == 'group' && (
                <Accordion allowMultiple size='sm'>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _focus={{ boxShadow: 'none' }}>
                                <Box flex='1' textAlign='left'>
                                Section 1 title
                                </Box>
                                <AccordionIcon /> 
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <Flex justifyContent="center">  
                                <Table size='sm' variant='striped' colorScheme='blackAlpha' mt={1}>
                                    <HeadCustom keys={keys} tableConfig={tableConfig} bolAction={bolAction}/>
                                    <Tbody>
                                        { datas.map((line, i) => <RowCustom key={i} line={line} tableConfig={tableConfig} bolAction={bolAction} editFunction={editFunction} modalDelete={modalDelete} deleteFunction={deleteFunction} viewFunction={viewFunction} />) }                        
                                    </Tbody>
                                </Table>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>                   
                </Accordion>
            )}

            
        </>
    )
}