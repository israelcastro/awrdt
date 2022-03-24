import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form'
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement,InputProps> 
    = ({ name, label, error = null, ...rest }, ref) => {
    return(
    <FormControl isInvalid={!!error}>          
        { !!label && <FormLabel fontWeight="normal" htmlFor={name}>{label}</FormLabel> }
        <ChakraInput
            name={name}
            id={name}
            focusBorderColor="blue.500"
            borderColor="blue.700"
            border="solid 1px"
            bg="white"
            variant="filled"
            _hover={{ 
                bgColor: 'blue.100'}}
            _disabled={{bgColor:'gray.200', borderColor: 'gray.400'}}
            size="md"
            _readOnly={{readOnly: 'true'}}
            ref={ref}
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

export const InputCustom = forwardRef(InputBase)