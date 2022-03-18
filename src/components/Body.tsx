import { Flex, Center } from "@chakra-ui/react";
import { Header } from "./Header";
import Navbar from "./Navbar";

export default function Body(props){
    return(
        <Flex flex={1} m={4} flexDirection="column" bg="white" shadow="md" p={6} borderRadius="3">
            {props.children}
        </Flex>
    )
}