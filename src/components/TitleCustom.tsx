import { Flex, Text } from "@chakra-ui/react";

interface TitleCustomProps {
    title : string,
    subtitle? : string
}

export default function TitleCustom({ title , subtitle } : TitleCustomProps){
    return (
        <Flex
          flex={1}
          ml={4}
          mt={4}
          mb={1}
          flexDirection="column"
          p={3}
          borderRadius="3"                 
        >
            <Text fontSize='3xl' fontWeight='bold' color="gray.600" >
                {title}
            </Text>
            <Text ml={2} mt={-2} fontSize='md' color="gray.200" >
                {subtitle}
            </Text>
        </Flex>
    )
}