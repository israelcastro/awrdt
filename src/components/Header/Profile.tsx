import { Avatar, Box, Center, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

interface ProfileProps {
    showProfileData : boolean
}

export function Profile({ showProfileData = true }:ProfileProps) {
    const { user, signOut } = useContext(AuthContext)
    return (
        <Flex align="center" >
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text color="white">{user?.name}</Text>
                    <Text color="#353646" fontSize="small">
                        {user?.email}
                    </Text>         
                </Box>
            )}
            <Menu>
                <MenuButton
                    rounded={'full'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar size="md" name={user?.name} />
                </MenuButton>
                <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                        <Avatar
                            size={'2xl'}
                            name={user?.name} 
                            src=""
                        />
                    </Center>
                    <br />
                    <Center><p>{user?.name}</p></Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Configuração</MenuItem>
                    <MenuItem onClick={signOut}>Sair</MenuItem>
                </MenuList>
            </Menu>

            
        </Flex>
    );
}