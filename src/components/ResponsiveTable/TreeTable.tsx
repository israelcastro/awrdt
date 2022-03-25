import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex, HStack, Table, Tbody, Td, Th, Thead, Tr, Text, Heading } from "@chakra-ui/react"
import SubBody from "../SubBody"



const TreeTable = ({datas,tableConfig}) => {    
    if(datas.id){
        return (
            <>
                <SubBody>
                    <Table>
                        <HeadCustom tableConfig={tableConfig}/>
                        <BodyCustom datas={datas.cobranca} tableConfig={tableConfig}/>            
                    </Table>
                </SubBody>
                <HStack flex={1} bg='gray.200' justifyContent='space-between' p={2} mt={2}>
                    <Footer title='Total Orçado:' value={datas.totalOrcado}/>
                    <Footer title='Total Recuperado:' value={datas.totalPago}/>
                    <Footer title='Total Pendente:' value={datas.totalPendente} color='red'/>
                </HStack>
            </>
        )
    } else {
        return (
           <>
           </>
        )
    }
}

const HeadCustom = ({tableConfig}) => {
    const tableHead = tableConfig?.head || {}
    const keys = Object.keys(tableHead) 

    return (
        <Thead background={'#ccc'}>
            <Tr>
                {
                    keys.map( (key,i) => 
                        <Th key={i} textAlign="center" width={tableHead[key]?.size} paddingInlineStart={0} >
                            { tableHead[key]?.name || key }
                        </Th> 
                    )
                }
            </Tr>
        </Thead>
    )
}

const BodyCustom = ({datas, tableConfig}) => {
    
    return (
        <Tbody>
            <Tr>
                <Td textAlign="center" colSpan={6} paddingInline={0} border={0}>
                    {datas.map((data,i) => <AccordionCustom key={i} datas={data} tableConfig={tableConfig}/>)}                                        
                </Td>
            </Tr>                
        </Tbody>
    )
}

const AccordionCustom = ({datas, tableConfig}) => {
    return (
        <Accordion allowToggle m={-2} border={'solid 0px #FFFFFF'}>
            <Item datas={datas} tableConfig={tableConfig}/>
        </Accordion>
    )
}

const Item = ({datas, tableConfig}) => {
    const parcelas = datas.parcela.parcelas
    return (
        <AccordionItem>            
            <AccordionHead datas={datas} tableConfig={tableConfig}/>
            {parcelas && <AccordionPanelCustom datas={datas?.parcela} tableConfig={tableConfig} />}
        </AccordionItem>
    )
}

const AccordionHead = ({datas, tableConfig}) => {
    return (
        <AccordionButton p={0} _focus={{ boxShadow: 'none' }} paddingInline={0} disabled={true}>
          <AccordionHeadItems datas={datas} tableConfig={tableConfig}/>
        </AccordionButton>
    )
}

const AccordionHeadItems = ({datas, tableConfig}) => {
    const tableHead = tableConfig?.head || {}
    const keys = Object.keys(tableHead)
    const parcelas = datas.parcela.parcelas
    return (
        <Table>
            <Tbody>
                <Tr>
                {keys.map((key,i) => 
                    <Td key={i} textAlign="center" width={tableHead[key]?.size} paddingInlineStart={0} >
                        { parcelas && key == 'id' && <AccordionIcon />}
                        { datas[key] }
                    </Td>
                )}
                </Tr>
            </Tbody>
        </Table>
    )
}

const AccordionPanelCustom = ({datas, tableConfig}) => {
    
    return (
        <AccordionPanel paddingInline={0} pl={10}>
            <Table variant='striped' colorScheme='blackAlpha' size='sm' >
                <Tbody>
                    {datas.parcelas.map((data,i) => <AccordionPanelTableItems key={i} datas={data} tableConfig={tableConfig} />)}
                </Tbody>
            </Table>
        </AccordionPanel>
    )
}

const AccordionPanelTableItems = ({datas, tableConfig}) => {
    const tableHead = tableConfig?.head || {}
    const keys = Object.keys(tableHead)
    return (
        <Tr>            
            {keys.map((key,i) => 
                <Td key={i} textAlign="center" width={tableHead[key]?.size} paddingInlineStart={0} >
                    { datas[key] }
                </Td>
            )}
        </Tr>
    )
}

const Footer = ({title, value, color = ''}) => {
    return (
        <HStack alignItems='center' p={1} spacing={3}>
            <Heading variant='h4'>{title}</Heading>
            <Text variant="default" color={color && color}>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(value)}
            </Text>
        </HStack>
    )
}



export default TreeTable