import { Th, Thead, Tr } from "@chakra-ui/react"

export const HeadCustom = ({ keys, tableConfig, bolAction = true }) => {
    const tableHead = tableConfig?.head || {}
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