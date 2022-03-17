import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Delete } from "./Delete";

interface AlertCustomProps {
    headerAlert,
    bodyAlert,
    isOpen, 
    onOpen, 
    onClose,
    actionConfirm,
    data?
}



export default function AlertCustom({ isOpen, onOpen, onClose, headerAlert, bodyAlert, actionConfirm, data }:AlertCustomProps){
    const cancelRef = React.useRef()
    
    
    return (
        <>
            {/* <Button onClick={onOpen}>Discard</Button> */}
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered               
            >
                <AlertDialogOverlay />                
                <Delete header={headerAlert} body={bodyAlert} isOpen={isOpen} onClose={onClose} actionConfirm={actionConfirm} data={data} />
            </AlertDialog>
        </>
    )
}
