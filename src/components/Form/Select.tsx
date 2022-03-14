import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form'
import { FormControl, FormLabel, Select as ChakraSelect, SelectProps as ChakraSelectProps } from "@chakra-ui/react";

type OptionsProps = {
    id: string;
    value: string;
}

interface SelectProps extends ChakraSelectProps {
    name: string;
    label?: string;
    placeholder?: string;
    error?: FieldError;
    options?: OptionsProps[];
}


const SelectBase: ForwardRefRenderFunction<HTMLSelectElement,SelectProps> 
    = ({ name, label, options = [], error = null, ...rest }, ref) => {
    return(
        <FormControl isInvalid={!!error}>          
            { !!label && <FormLabel htmlFor={name} fontWeight="normal">{label}</FormLabel> }
            <ChakraSelect 
                name={name}
                id={name}
                placeholder="teste"
                focusBorderColor="blue.500"
                borderColor="blue.300"
                variant="filled"
                _hover={{
                    bgColor: 'blue.100'}}
                size="lg"
                ref={ref}
                {...rest}
            >
                
                {
                    options.map((option, index) => {
                        return (
                            <option key={index} value={option.id}>{option.value}</option>
                        )
                    })
                }
            </ChakraSelect>
        </FormControl>
    )

}

export const Select = forwardRef(SelectBase)