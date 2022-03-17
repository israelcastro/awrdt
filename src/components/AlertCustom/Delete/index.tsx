import { AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, Box, Button } from "@chakra-ui/react";
import React from "react";

interface deleteProps {
    header,
    body,
    isOpen?, 
    onClose?,
    actionConfirm?,
    data?
}

export function Delete({header, body, isOpen, onClose, actionConfirm, data}:deleteProps){
    const cancelRef = React.useRef()
    return (
        <AlertDialogContent m={5}>
            <AlertDialogHeader>{header}</AlertDialogHeader>
            <AlertDialogCloseButton _focus={{ borderColor: "transparent" }} />
            <AlertDialogBody>
                <Box>{body}</Box>
            </AlertDialogBody>
            <AlertDialogFooter>
                <Button variant="outline" ref={cancelRef} onClick={onClose}>Cancelar</Button>
                <Button variant="delete" ml={3} onClick={() => [actionConfirm(data),onClose()] }>Confirmar</Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    )
}