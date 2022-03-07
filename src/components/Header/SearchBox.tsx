import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
    
    return (
        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            alignSelf="center"
            color="gray.600"
            position="relative"
            bg="gray.300"
            borderRadius="full"
        >
            <Input
                color="gray.700"
                variant="unstyled"
                px="4"
                mr="4"
                placeholder="Buscar na plataforma"
                _placeholder={{ color: 'gray.600' }}                
            >                   
            </Input>
            <Icon as={RiSearchLine} fontSize="20" />
        
        </Flex>
    );
}