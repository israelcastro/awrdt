import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form'
import { FormControl, FormErrorMessage, FormLabel, Textarea as ChakraTextarea, TextareaProps as ChakraTextareaProps } from "@chakra-ui/react";

interface TextareaProps extends ChakraTextareaProps {
    name: string;
    label?: string;
    error?: FieldError
}

const TextareaBase: ForwardRefRenderFunction<HTMLInputElement,TextareaProps> 
    = ({ name, label, error = null, ...rest }, ref) => {
    return(
    <FormControl isInvalid={!!error}>          
        { !!label && <FormLabel fontWeight="normal" htmlFor={name}>{label}</FormLabel> }
        <ChakraTextarea
            name={name}
            id={name}
            focusBorderColor="blue.500"
            borderColor="blue.700"
            border="solid 1px"
            bg="white"
            variant="filled"
            _hover={{
                bgColor: 'blue.50'}}
            _disabled={{bgColor:'gray.300'}}
            size="md"
            {...rest}
        />
        { !!error && (
            <FormErrorMessage>
                {error.message}
            </FormErrorMessage>
        )}
    </FormControl>
    )
}

export const TextareaCustom = forwardRef(TextareaBase)