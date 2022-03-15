import { InputCustom } from '../../components/Form/Input'
import { Box, Divider, FormLabel, Stack, Text, Textarea } from '@chakra-ui/react'
import { SelectCustom } from '../../components/Form/Select'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Processo(){
    const baseUrl = "http://localhost:3333"
    const [situacaoForm, setsituacaoForm] = useState([]);
    const [origem, setorigem] = useState([]);
    let [value, setValue] = useState('')

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    useEffect(() => {
        getSituacao()
        getOrigem()
    }, []);

    const getSituacao = async()=>{
        await axios.get(baseUrl+"/situacoesForm")
        .then(response =>{
            setsituacaoForm(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    const getOrigem = async()=>{
        await axios.get(baseUrl+"/origens")
        .then(response =>{
            setorigem(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    return (
        <>
            <Text fontSize='2xl'>Processo</Text>
            <Divider height={0.6} bgColor='gray.900' />
            <Stack direction={['column', 'row']} spacing='24px'>

                <InputCustom 
                    name= "codigo"
                    label="Código:"
                    type="text"
                />
                 <InputCustom 
                    name= "dataAbertura"
                    label="Data de Avbertura:"
                    type="date"
                />
                <SelectCustom 
                    name="situacaoFormulario"
                    label="Situação"
                    options={situacaoForm}
                />
                <InputCustom 
                    name= "ultimaAlteracao"
                    label="Ultima Alteração:"
                    type="date"
                />
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                <InputCustom 
                    name= "boletimOcorrencia"
                    label="Boletim Ocorrência:"
                    type="text"
                />
                <InputCustom 
                    name= "dataAberturaOcor"
                    label="Data de Abertura:"
                    type="date"
                />
                <SelectCustom 
                    name="oriegem"
                    label="Origem:"
                    options={origem}
                />
                <InputCustom 
                    name= "usuarioAlteracao"
                    label="Usuário Ultima Alteração:"
                    type="text"
                />
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                <InputCustom 
                    name= "responsavel"
                    label="Responsável:"
                    type="text"
                    
                />
                <InputCustom 
                    name= "idPost"
                    label="ID Poste:"
                    type="date"
                    width={'auto'}
                />
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                <InputCustom 
                    name= "endereco"
                    label="Endereço:"
                    type="text"                    
                />  
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                <div>

                <FormLabel htmlFor='first-name'>Observação:</FormLabel>
                </div>
                
               
                    <Textarea
                        value={value}
                        onChange={handleInputChange}
                        placeholder='Here is a sample placeholder'
                        
                    />    
                
                        
            </Stack>
        </>
    )
}