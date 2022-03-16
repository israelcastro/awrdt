import { Box, Button, Stack, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { PaginationItem } from "./PaginationItem";



const Pagination = ({ limit, total, offset, setOffset }) => {
    const [pageTo, setPageTo] = useState(1);
    const [pageFrom, setPageFrom] = useState(limit)

    let MAX_ITEMS = 9;
    
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    if(!isWideVersion){ 
        MAX_ITEMS = 5
    }
        
    let MAX_LEFT = (MAX_ITEMS - 1) / 2;
    
    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1)
    const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst)

    function onPageChange(page){
        setOffset((page - 1) * limit)
        setPageTo( ((limit * page) - limit) + 1 )
        setPageFrom( Math.min(limit * page, total) )
    }

    if(pages <= 1) {
        return (<Box></Box>)
    }

    

    return (
        <Stack
            direction={["column","row"]}
            spacing="6"
            mt="8"
            justify="space-between"
            align="center"
        >
            <Box>
                <strong>{pageTo}</strong> - <strong>{pageFrom}</strong> de <strong>{total}</strong>
            </Box>
            
            <Stack direction="row" spacing="2">
                <Button 
                    size="sm"
                    fontSize="xs" 
                    bg="blue.700"                    
                    _hover={{
                        bg:"blue.500"
                    }}
                    disabled={current === 1}
                    onClick={() => onPageChange(current -1)} 
                >
                    Anterior
                </Button>
                { Array.from({ length: Math.min( MAX_ITEMS, pages ) })
                    .map((_, index) => index + first)
                    .map((page)=>(                        
                        <PaginationItem number={page} onPageChange={onPageChange} isCurrent={page === current ? true : false}/>
                ))}
                <Button 
                    size="sm"
                    fontSize="xs" 
                    bg="blue.700"                    
                    _hover={{
                        bg:"blue.500"
                    }}
                    onClick={() => onPageChange(current +1)} 
                    disabled={current >= pages}
                >
                    Póximo
                </Button>                
            </Stack>            
        </Stack>
    )

    
}

export default Pagination;