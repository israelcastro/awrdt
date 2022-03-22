import { InputCustom } from '../../components/Form/Input'
import { Divider,  Stack, Text } from '@chakra-ui/react'
import { SelectCustom } from '../../components/Form/Select'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProcessoService } from '../../services';
import FormatDados from "../../FormatDados"
import { TextareaCustom } from '../../components/Form/TextArea';

export default function Processo(){
    const [situacaoForm, setsituacaoForm] = useState([]);
    const [origem, setorigem] = useState([]);
    let [value, setValue] = useState('')

    const router = useRouter()
    const [process, setProcess] = useState([]);
    useEffect(() => {
        const {id} = router.query 
        router.isReady && getProcesso(id) 
        getSituacao()
        getOrigem()    
    }, [router.isReady]);

    async function getProcesso(id){
        const response = await ProcessoService.getProcessById(id);
        console.log(">>>>"+response.data)
        setProcess(response.data)
        //setnovaData(formatData(process['abertura']))
    }

    async function getSituacao(){
        const response = await ProcessoService.getSituacoes();
        setsituacaoForm(response.data)
    }
    async function getOrigem(){
        const response = await ProcessoService.getOrigens();
        setorigem(response.data)
    }
    
    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }   

    return (
        <>
            <Stack direction={['column', 'row']} spacing='24px'>

                <InputCustom 
                    name= "codigo"
                    label="Código:"
                    type="text"
                    isDisabled={true}
                    value={process['processo']}
                />
                 <InputCustom 
                    name= "dataAbertura"
                    label="Data de Abertura:"
                    type="date"
                    //value={props['abertura']}
                    value={FormatDados.data(process['abertura'])}
                />
                <SelectCustom 
                    name="situacaoFormulario"
                    label="Situação"                    
                    options={situacaoForm}
                    valor={3}                  
                />
                <InputCustom 
                    name= "ultimaAlteracao"
                    label="Ultima Alteração:"
                    type="date"
                    value={FormatDados.data(process['ultimaAcao'])}
                />
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                <InputCustom 
                    name= "boletimOcorrencia"
                    label="Boletim Ocorrência:"
                    type="text"
                    value={process['bo']}
                />
                <InputCustom 
                    name= "dataAberturaOcor"
                    label="Data de Abertura:"
                    type="date"
                    value={FormatDados.data(process['abertura'])}
                />
                <SelectCustom 
                    name="oriegem"
                    label="Origem:"
                    options={origem}
                    valor={process['origem']}
                />
                <InputCustom 
                    name= "usuarioAlteracao"
                    label="Usuário Ultima Alteração:"
                    type="text"
                    value={process['ultimoAtualizar']}
                />
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                <InputCustom 
                    name= "responsavel"
                    label="Responsável:"
                    type="text"
                    value={process['responsavel']}
                />
                <InputCustom 
                    name= "idPost"
                    label="ID Poste:"
                    type="text"
                    width={'auto'}
                    value={'2102054'}
                />
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                <InputCustom 
                    name= "endereco"
                    label="Endereço:"
                    type="text"
                    value="Rua Maria Rosa, 120"                    
                />  
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                              
               
                <TextareaCustom    
                    name="observacao"
                    label="Observação"                 
                    value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."                 
                />      
            </Stack>

            <Text mt={30} fontSize='2xl'>Ocorrencia/Ordem Técnica </Text>
            <Divider height={0.6} bgColor='gray.900' />
            <Stack direction={['column', 'row']} spacing='24px'>
                <InputCustom 
                    name= "codigo"
                    label="Código:"
                    type="text"
                    isDisabled={true}
                                        
                    value={process['codigoOcorrencia']}
                />
                <InputCustom 
                    name= "ocorrenciaAbertura"
                    label="Abertura:"
                    type="date"
                    isDisabled={true}
                    value={FormatDados.data(process['abertura'])}
                />
                <InputCustom 
                    name= "ocorrenciaEncerramento"
                    label="Encerramento:"
                    type="date"
                    isDisabled={true}
                    value={FormatDados.data(process['abertura'])}
                />
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                <InputCustom 
                    name= "ocorrenciaRegional"
                    label="Regional:"
                    type="text"
                    isDisabled={true}
                    value={'teste'}
                /><InputCustom 
                    name= "ocorrenciaConjunto"
                    label="Conjunto:"
                    type="text"
                    isDisabled={true}
                    value={process['ocorrencia']}
                />  
                <InputCustom 
                    name= "ocorrenciaLocalizacao"
                    label="Localização:"
                    type="text"
                    isDisabled={true}
                    value={process['ocorrencia']}
                /> 
                <InputCustom 
                    name= "clientesAtingidos"
                    label="Clientes atingidos:"
                    type="text"
                    isDisabled={true}
                    value={process['ocorrencia']}
                /> 
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                <InputCustom 
                    name= "ocorrenciaPolo"
                    label="Polo:"
                    type="text"
                    isDisabled={true}
                    value={process['ocorrencia']}
                /><InputCustom 
                    name= "ocorrencuiaAlimentador"
                    label="Alimentador:"
                    type="text"
                    isDisabled={true}
                    value={process['alimentador']}
                />  
                <InputCustom 
                    name= "ocorrenciaUC"
                    label="UC (referência):"
                    type="text"
                    isDisabled={true}
                    value={process['ocorrencia']}
                /> 
                <InputCustom 
                    name= "ocorrenciaCompensacao"
                    label="Compensação DEC:"
                    type="text"
                    isDisabled={true}
                    value={process['ocorrencia']}
                /> 
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                <InputCustom 
                    name= "ocorrenciaLocalidade"
                    label="Localidade:"
                    type="text"
                    isDisabled={true}
                    value={process['localidade']}
                /><InputCustom 
                    name= "ocorrenciaSubestacao"
                    label="Subestação:"
                    type="text"
                    isDisabled={true}
                    value={process['ocorrencia']}
                />  
                <InputCustom 
                    name= "ocorrenciaOSManut"
                    label="OS Manut:"
                    type="text"
                    isDisabled={true}
                    value={process['ocorrencia']}
                />            
            </Stack>
            <Text mt={30} fontSize='2xl'>Dados do Motorista/Veículo </Text>
            <Divider height={0.6} bgColor='gray.900' />
            <Stack direction={['column', 'row']} spacing='24px'>
                <InputCustom 
                    name= "placa"
                    label="Placa:"
                    type="text"
                    value={process['ocorrencia']}
                />
                <InputCustom 
                    name= "modelo"
                    label="Modelo:"
                    type="text"
                    value={process['modelo']}
                />               
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                <InputCustom 
                    name= "condutor"
                    label="Condutor:"
                    type="text"
                    value={process['condutor']}
                /><InputCustom 
                    name= "documento"
                    label="Documento (RG/CPF):"
                    type="text"
                    value={process['ocorrencia']}
                />  
                <InputCustom 
                    name= "cnh"
                    label="CNH:"
                    type="text"
                    value={process['ocorrencia']}
                /> 
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' mt={5}>
                <InputCustom 
                    name= "endereco"
                    label="Endereço:"
                    type="text"
                    value={process['localidadade']}
                /><InputCustom 
                    name= "cidade"
                    label="Cidade:"
                    type="text"
                    value={process['ocorrencia']}
                />  
                <InputCustom 
                    name= "uf"
                    label="UF (referência):"
                    type="text"
                    value={process['uf']}
                /> 
                <InputCustom 
                    name= "cep"
                    label="CEP:"
                    type="text"
                    value={process['ocorrencia']}
                /> 
            </Stack>           
        </>
    )
}