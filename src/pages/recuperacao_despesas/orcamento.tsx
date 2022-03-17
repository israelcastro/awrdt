import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, FormControl, HStack, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { InputCustom } from "../../components/Form/Input";
import { SelectCustom } from "../../components/Form/Select";
import { ProcessoService } from "../../services";

export default function Orcamento(){
    const [tipoDeObra, settipoDeObra] = useState([]);

    async function getSituacao(){
        const response = await ProcessoService.getSituacoes();
        settipoDeObra(response.data)
    }
    return(
        <>
            {/* <FormControl as='fieldset' >
                <Stack direction={['column', 'row']} spacing='24px' justifyContent="center" alignItems="center">
                    <SelectCustom
                        name='tipoDeBusca'
                        label="Tipo de Busca"
                        options={tipoDeObra}
                    />
                    <InputCustom 
                        name="codigo"
                        label="Código"
                    />
                   <Button colorScheme='teal' variant='primary' p='25px' >
                        Buscar 
                    </Button> 
                </Stack>
            </FormControl> */}

            <Flex justifyContent="space-between" flex={1} border='1px' borderColor='gray.200' p={3}> 
                <Stack direction={['column', 'row']} spacing={5} flex={0.9}>
                    <SelectCustom
                        name='tipoDeBusca'
                        label="Tipo de Busca"
                        options={tipoDeObra}
                    /> 
                    <InputCustom 
                        name="codigo"
                        label="Código"
                    />
                </Stack>
                <Flex alignItems="flex-end">
                    <Button variant='primary'size="lg" >
                        Buscar 
                    </Button>
                </Flex>
            </Flex>
          
        </>
        
    )
}