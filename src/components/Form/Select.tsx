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
        <FormControl isInvalid={!!error} variant='floating'>
            <ChakraSelect 
                placeholder=' '
                name={name}
                id={name}
                focusBorderColor="blue.500"
                borderColor="blue.700"
                border="solid 1px"
                bg="white"
                variant="filled"
                _hover={{
                    bgColor: 'blue.100'}} 
                size="md"
                ref={ref}
                //onChange={(event)=>inputChangedHandler(event)} />
                {...rest}
            >   
                {
                    options.map((option : any, index) => {
                        return(
                            
                            <option key={index} value={option.id}>{option.value}</option>
                            
                        )
                        
                    })
                    
                }

                <option defaultChecked>asd</option>
            </ChakraSelect>
            { !!label && <FormLabel htmlFor={name} fontSize={[13,16]} fontWeight="normal">{label}</FormLabel> }
        </FormControl>
    )

}

export const SelectCustom = forwardRef(SelectBase)