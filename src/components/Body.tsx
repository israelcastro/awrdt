import { Flex, Center } from "@chakra-ui/react";
import { Header } from "./Header";
import Navbar from "./Navbar";

export default function Body(props){
    return(
        <Flex flex={1} m={8} flexDirection="column">
            {props.children}
        </Flex>
    )
}