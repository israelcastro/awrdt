import { CheckCircleIcon, CloseIcon, InfoIcon, WarningIcon, WarningTwoIcon } from "@chakra-ui/icons"
import { Button, Flex, Stack, useToast, Text, VStack, HStack, IconButton } from "@chakra-ui/react"
import Link from "next/link"

export default function ToastCustom({type, msg, onClose}){
    const toast = useToast()    
    let icon : any
    let color : any;

    type == 'success' ? (icon = <CheckCircleIcon fontSize="2xl" mt={-1} />, color='green.500')  :
    type == 'error'   ? (icon = <WarningTwoIcon fontSize="2xl" mt={-1}/>, color='red.500') :
    type == 'warning' ? (icon = <WarningIcon fontSize="2xl" mt={-1}/> , color='orange.500')  
                      : (icon = <InfoIcon fontSize="2xl" mt={-1}/> , color='blue.500');

    return (
        <Flex color="white" w="100vw" justifyContent="center" >
            <Flex flex={1} p={2} mr={5} bg={color} alignItems="center" borderRadius="md" justifyContent="space-between">
                <HStack spacing={4} align="center" ml={2}>
                    {icon}
                    <Text>{msg}</Text>                     
                </HStack>
                <Flex>
                <IconButton onClick={onClose} variant="link" aria-label='Fechar' icon={<CloseIcon />} fontSize="xs" />
                </Flex>
            </Flex>
        </Flex>
    )
}