import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form'
import { Checkbox as ChakraCheckbox, FormControl, FormErrorMessage, FormLabel, CheckboxProps as ChakraCheckboxProps, Flex, Text } from "@chakra-ui/react";

interface InputProps extends ChakraCheckboxProps {
    name: string;
    label?: string;
    error?: FieldError 
}

const CheckboxBase: ForwardRefRenderFunction<HTMLInputElement,InputProps> 
    = ({ name, label, error = null, ...rest }, ref) => {
    return(
    
    <FormControl isInvalid={!!error}>          
        { !!label && <FormLabel fontWeight="normal" htmlFor={name}>{''}</FormLabel> }
        <ChakraCheckbox
            name={name}
            id={name}
            {...rest}            
        >
            <Text fontSize={[14,16]}>{label}</Text>
        </ChakraCheckbox>
        { !!error && (
            <FormErrorMessage>
                {error.message}
            </FormErrorMessage>
        )}
    </FormControl>
    
    )
}

export const CheckboxCustom = forwardRef(CheckboxBase)