import { Flex, Center } from "@chakra-ui/react";

export default function SubBody({...rest}){
    return(
        <Flex flex={1} flexDirection="column" bg="transparent" maxH={["auto","50vh"]} overflowY="auto"  
            css={{
                '&::-webkit-scrollbar': {width: '6px'},
                '&::-webkit-scrollbar-track': {width: '6px'},
                '&::-webkit-scrollbar-thumb': {background: 'gray', borderRadius: '24px'},
            }}
        >
            {rest.children}
        </Flex>
    )
}