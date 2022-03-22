import { Box, Flex, HStack, Icon, Stack, Tab, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiListUnordered } from "react-icons/ri";

export function TabCustom({icon, text}) {
    const isWideVersion = useBreakpointValue({
        base: false,
        md: false,
        lg: true
    });
    
    return (
        <Tab>
            <Stack align='center' direction={['column','column','row']} p={[0,3]} fontSize={[13,15]}>
                
                <Icon as={icon} />
                {isWideVersion && <Text>{text}</Text>  }          
            </Stack>
        </Tab>
    )
}