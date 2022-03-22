import { CheckCircleIcon, DeleteIcon, EditIcon, NotAllowedIcon, ViewIcon } from "@chakra-ui/icons"
import { HStack, IconButton, Td, Tr } from "@chakra-ui/react"

export const RowCustom = ({ line, tableConfig, bolAction = true, editFunction, modalDelete, deleteFunction, viewFunction }) => {
    const keys = Object.keys(tableConfig?.head)
    return(        
        <Tr key={line} fontSize={[10,14]}>
            { keys.map(key =>
                <Td textAlign="center" key={key}>
                    { 
                        typeof line[key] == "boolean" || tableConfig?.head[key].isBoolean  ? 
                            (line[key] == true || line[key] ? <CheckCircleIcon color='green' /> : <NotAllowedIcon color='red' />)  
                            : (tableConfig?.head[key].child) ? (line[key][tableConfig?.head[key].child])
                            : (line[key])                            
                    } 
                </Td>                                 
            ) }

            
            {bolAction && 
                <Td textAlign="center"> 
                    <HStack spacing={1} justifyContent="center">
                        {editFunction && <IconButton size="xs" onClick={() => editFunction(line)} aria-label='Editar' icon={<EditIcon />} fontSize="xs" /> }
                        {deleteFunction && <IconButton size="xs" onClick={() => modalDelete(line)} variant='danger' aria-label='Deletar' icon={<DeleteIcon />} fontSize="xs" /> }
                        {viewFunction && <IconButton size="xs" onClick={() => viewFunction(line)} variant='success'  aria-label='Visualizar' icon={<ViewIcon />} fontSize="xs" /> }
                    </HStack>
                </Td>
            }                         
        </Tr>
    ) 
}