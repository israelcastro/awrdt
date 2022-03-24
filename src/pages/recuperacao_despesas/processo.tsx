import { InputCustom } from '../../components/Form/Input'
import { Divider,  Stack, Text } from '@chakra-ui/react'
import { SelectCustom } from '../../components/Form/Select'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProcessoService } from '../../services';
import FormatDados from "../../FormatDados"
import { TextareaCustom } from '../../components/Form/TextArea';
import { GridCustom, GridItemCustom } from '../../components/GridCustom';

export default function Processo(){
    const [situacaoForm, setsituacaoForm] = useState([]);
    const [origem, setorigem] = useState([]);
    let [value, setValue] = useState('')
    const router = useRouter()
    const [process, setProcess] : any = useState({});
    
    useEffect(() => {
        const {id} = router.query 
        router.isReady && getProcesso(id) 
        getSituacao()
        getOrigem()    
    }, [router.isReady]);

    async function getProcesso(id){
        const response = await ProcessoService.getProcessById(id);
        setProcess(response.data)        
    }

    async function getSituacao(){
        const response = await ProcessoService.getSituacoes();
        setsituacaoForm(response.data)
    }
    async function getOrigem(){
        const response = await ProcessoService.getOrigens();
        setorigem(response.data)
    }
    
    function handleInputChange(e){
        setProcess(prevState  => ({ ...prevState,[e.target.name] : e.target.value }))
    }   


    return (
        <>

            
            <Text fontSize='2xl'>Processo</Text>
            
            <GridCustom cols={4} border={true}>
                <GridItemCustom>
                    <InputCustom 
                        name= "codigo"
                        label="Código:"
                        type="text"
                        isReadOnly={true}
                        isDisabled={true}
                        value={process['processo'] || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "abertura"
                        label="Data de Abertura:"
                        type="date"
                        value={FormatDados.data(process['abertura']) || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom>
                    <SelectCustom 
                        name="situacaoFormulario"
                        label="Situação"                    
                        options={situacaoForm}
                        valor={3}
                        value={1} 
                        onChange={e => handleInputChange(e)}                 
                    />
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "ultimaAcao"
                        label="Ultima Alteração:"
                        type="date"
                        value={FormatDados.data(process['abertura']) || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                
                <GridItemCustom>
                    <InputCustom 
                        name= "bo"
                        label="Boletim Ocorrência:"
                        type="text"
                        value={process['bo'] || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "dataAberturaOcor"
                        label="Data do BO:"
                        type="date"
                        value={FormatDados.data(process['abertura']) || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom>
                    <SelectCustom 
                        name="oriegem"
                        label="Origem:"
                        options={origem}
                        valor={process['origem'] || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "ultimoAtualizar"
                        label="Usuário Ultima Alteração:"
                        type="text"
                        value={process['ultimoAtualizar'] || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>

                <GridItemCustom>
                    <InputCustom 
                        name= "responsavel"
                        label="Responsável:"
                        type="text"
                        value={process['responsavel'] || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom cols={1}>
                    <InputCustom 
                        name= "idPost"
                        label="ID Poste:"
                        type="text"
                        value={'2102054'}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom cols={2}></GridItemCustom>
                
                <GridItemCustom cols={4}>
                    <InputCustom 
                        name= "endereco"
                        label="Endereço:"
                        type="text"
                        value="Rua Maria Rosa, 120"   
                        onChange={e => handleInputChange(e)}                 
                    />  
                </GridItemCustom>
                <GridItemCustom cols={4}>
                    <TextareaCustom    
                        name="observacao"
                        label="Observação"                 
                        value={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                        onChange={e => handleInputChange(e)}                 
                    />  
                </GridItemCustom>
                
                               


            </GridCustom>
            

            <Text mt={30} fontSize='2xl'>Ocorrencia/Ordem Técnica </Text>
            
            <GridCustom cols={4} border={true}>
                <GridItemCustom cols={2}>
                    <InputCustom 
                        name= "codigo"
                        label="Código:"
                        type="text"
                        isDisabled={true}                                            
                        value={process['codigoOcorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "ocorrenciaAbertura"
                        label="Abertura:"
                        type="date"
                        isDisabled={true}
                        value={FormatDados.data(process['abertura']) || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "ocorrenciaEncerramento"
                        label="Encerramento:"
                        type="date"
                        isDisabled={true}
                        value={FormatDados.data(process['abertura']) || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>

                <GridItemCustom>
                    <InputCustom 
                        name= "ocorrenciaRegional"
                        label="Regional:"
                        type="text"
                        isDisabled={true}
                        value={'teste'}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "ocorrenciaConjunto"
                        label="Conjunto:"
                        type="text"
                        isDisabled={true}
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    /> 
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "ocorrenciaLocalizacao"
                        label="Localização:"
                        type="text"
                        isDisabled={true}
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    /> 
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "clientesAtingidos"
                        label="Clientes atingidos:"
                        type="text"
                        isDisabled={true}
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    /> 
                </GridItemCustom>

                <GridItemCustom>
                    <InputCustom 
                        name= "ocorrenciaPolo"
                        label="Polo:"
                        type="text"
                        isDisabled={true}
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "ocorrencuiaAlimentador"
                        label="Alimentador:"
                        type="text"
                        isDisabled={true}
                        value={process['alimentador'] || ''}
                        onChange={e => handleInputChange(e)}
                    />  
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "ocorrenciaUC"
                        label="UC (referência):"
                        type="text"
                        isDisabled={true}
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    />  
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "ocorrenciaCompensacao"
                        label="Compensação DEC:"
                        type="text"
                        isDisabled={true}
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "ocorrenciaLocalidade"
                        label="Localidade:"
                        type="text"
                        isDisabled={true}
                        value={process['localidade'] || ''}
                        onChange={e => handleInputChange(e)}
                    />
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "ocorrenciaSubestacao"
                        label="Subestação:"
                        type="text"
                        isDisabled={true}
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    />  
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "ocorrenciaOSManut"
                        label="OS Manut:"
                        type="text"
                        isDisabled={true}
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    />  
                </GridItemCustom>
                <GridItemCustom></GridItemCustom>

            
            </GridCustom>
            

            <Text mt={30} fontSize='2xl'>Dados do Motorista/Veículo </Text>            
            
            <GridCustom cols={4} border={true}>
                <GridItemCustom >
                    <InputCustom 
                        name= "placa"
                        label="Placa:"
                        type="text"
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    /> 
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "modelo"
                        label="Modelo:"
                        type="text"
                        value={process['modelo'] || ''}
                        onChange={e => handleInputChange(e)}
                    />  
                </GridItemCustom>
                <GridItemCustom cols={2}></GridItemCustom>
                
                <GridItemCustom cols={2}>
                    <InputCustom 
                        name= "condutor"
                        label="Condutor"
                        type="text"
                        value={process['condutor'] || ''}
                        onChange={e => handleInputChange(e)}
                    />   
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "documento"
                        label="Documento (RG/CPF)"
                        type="text"
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    />  
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "cnh"
                        label="CNH:"
                        type="text"
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    />  
                </GridItemCustom>

                <GridItemCustom>
                    <InputCustom 
                        name= "endereco"
                        label="Endereço:"
                        type="text"
                        value={process['localidadade'] || ''}
                        onChange={e => handleInputChange(e)}
                    /> 
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "cidade"
                        label="Cidade:"
                        type="text"
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    /> 
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "uf"
                        label="UF (referência):"
                        type="text"
                        value={process['uf'] || ''}
                        onChange={e => handleInputChange(e)}
                    />  
                </GridItemCustom>
                <GridItemCustom>
                    <InputCustom 
                        name= "cep"
                        label="CEP:"
                        type="text"
                        value={process['ocorrencia'] || ''}
                        onChange={e => handleInputChange(e)}
                    />   
                </GridItemCustom>


                
            </GridCustom>
            
                     
        </>
    )
}