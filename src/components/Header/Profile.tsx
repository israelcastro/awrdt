import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData : boolean
}

export function Profile({ showProfileData = true }:ProfileProps) {
    return (
        <Flex align="center" >
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Israel Castro</Text>
                    <Text color="gray.600" fontSize="small">
                        israel.correia@gmail.com
                    </Text>         
                </Box>
            )}

            <Avatar size="md" name="Israel Castro" src="https://github.com/israelcastro.png"/>
        </Flex>
    );
}