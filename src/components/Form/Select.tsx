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
    valor?: number;
}


const SelectBase: ForwardRefRenderFunction<HTMLSelectElement,SelectProps> 
    = ({ name, label, options = [], valor, error = null, ...rest }, ref) => {
    return(
        <FormControl isInvalid={!!error}>          
            { !!label && <FormLabel htmlFor={name} fontWeight="normal">{label}</FormLabel> }
            <ChakraSelect 
                name={name}
                id={name}
                placeholder=""
                focusBorderColor="blue.500"
                borderColor="blue.700"
                border="solid 1px"
                bg="white"
                variant="filled"
                _hover={{
                    bgColor: 'blue.100'}}
                size="md"
                ref={ref}
                {...rest}
            >
                
                {
                    options.map((option : any, index) => {
                        return(
                            
                           valor === option.id
                                ? <option key={index} selected value={option.id}>{option.value}</option>
                                : <option key={index} value={option.id}>{option.value}</option>
                            
                        )
                        
                    })
                }
            </ChakraSelect>
        </FormControl>
    )

}

export const SelectCustom = forwardRef(SelectBase)