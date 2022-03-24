import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { InputCustom } from "../../components/Form/Input";
import { SelectCustom } from "../../components/Form/Select";
import { TextareaCustom } from "../../components/Form/TextArea";
import ResponsiveTable from "../../components/ResponsiveTable";
import FormatDados from "../../FormatDados";
import ProcessoService from "../../services/ProcessoService";

const formularioInicial = [{
    id:1,
    tipoCobranca: 'teste',
    canalCobranca:'teste',
    dataEnvioCobranca: 'teste',
    sucessoCobranca: 'teste',
    responsavelCobranca: 'teste',
    observacao:'teste',
<<<<<<< Updated upstream
    dataRegistro:'15/03/2022'
=======
    dataRegistro:'teste'
>>>>>>> Stashed changes
}]

export default function AcoesCobrancas(){
    const [tipoCobrancas, setTipoCobrancas] = useState();
    const [sucessosCobranca, setSucessosCobranca] = useState();
    const [formulario, setFormulario] = useState({});
    const [tabelaCobranca, setTabelaCobranca] = useState(formularioInicial);
    const now = new Date

    useEffect(() => {
        getTipoCobrancas()
        getSucessoCobrancas()
    }, []);

   /* useEffect(()=>{
        setTabelaCobranca({
            id: 2,
            tipoCobranca: 'teste',
            canalCobranca:'teste',
            dataEnvioCobranca: 'teste',
            sucessoCobranca: 'teste',
            responsavelCobranca: 'teste',
            observacao:'teste',
            dataRegistro:'teste'
            }
        )
    },[tabelaCobranca])*/

    async function getTipoCobrancas(){
        const response = await ProcessoService.getTipoCobranca();
        setTipoCobrancas(response.data)
    }

    async function getSucessoCobrancas(){
        const response = await ProcessoService.getSucessoCobranca();
        setSucessosCobranca(response.data)
    }
       
    const handleForm = (e) =>{
        const {name, value} = e.target;  
        setFormulario({...formulario, [name]: value, ['id']: 2, ['dataRegistro']: now.toLocaleDateString()})
        console.log(formulario['id'])
    }

    async function formSubmit (e) {
        e.preventDefault()
       const formData = new FormData(e.target);
       const data = Object.fromEntries(formData);
       //console.log(data)
       //setFormulario(data)
       //setFormulario({...formulario, ['dataRegistro']: data['dataRegistro']})
       const dados = await ProcessoService.postTeste(formulario)
        console.log(dados)
       //console.log(tabelaCobranca)
       setTabelaCobranca(tabelaCobranca =>[...tabelaCobranca, formulario] )

       //console.log(formulario)
        const {name, value} = e.target;
        setFormulario({...formulario, [name]: value, ['dataRegistro']: now.toLocaleDateString()})
        setFormulario({...formulario, [name]: value, ['id']: 2})
    }
      
    //console.log("formulario>>"+JSON.stringify(formulario))

    const tableConfig = {
        head : {   
            id: {
                name: 'ID',
                mobileHead: true
            },        
            tipoCobranca: {
                name: 'Tipo',
                mobileBody: true
            },
            canalCobranca: {
                name: 'Canal',
                mobileBody: true
            },
            dataEnvioCobranca: {
                name: 'Data do Envio',
                mobileBody: true
            },
            sucessoCobranca: {
                name: 'Sucesso?',
                mobileBody: true
            },
            responsavelCobranca: {
                name: 'Responsável',
                mobileBody: true
            },
            observacao: {
                name: 'Observação',
                mobileBody: true
            },
            dataRegistro:{
                name: 'Data do Registro',
                mobileBody: true   
            }
        }
    }

    async function deleteFunction(data?) {
        console.log(data) 
        //setToast(data);
        callToast('info', 'Registro deletado com sucesso')     
    } 
    async function viewFunction(data?) {
        console.log(data) 
        //setToast(data);
        callToast('success', 'Visualizando arquivo')     
    } 

    return(
        <Box justifyContent="space-between" flex={1} border='1px' borderColor='gray.200' p={3}>
            <form onSubmit={formSubmit}>
                <Stack direction={['column', 'row']} spacing={5} flex={0.9}>
                    <SelectCustom
                        name='tipoCobranca'
                        label="Tipo:"
                        placeholder="Selecione o tipo"
                        options={tipoCobrancas}
                        onChange={handleForm}
                        />
                    <SelectCustom
                        name='sucessoCobranca'
                        label="Sucesso:"
                        placeholder="Selecione o tipo"
                        options={sucessosCobranca}
                        onChange={handleForm}
                        />
                        <InputCustom 
                        name="dataEnvioCobranca"
                        label="Data do Envio:"
                        type="date"
                        onChange={handleForm}
                        />
                </Stack>
                <Stack direction={['column', 'row']} spacing={5} flex={0.9}>
                    <InputCustom 
                        name="responsavelCobranca"
                        label="Responsável:"
                        type="text"
                        onChange={handleForm}
                        />
                    <InputCustom 
                        name="canalCobranca"
                        label="Canal:"
                        placeholder="nome@dominio"
                        type="text"
                        onChange={handleForm}
                    />
                        
                </Stack>
                <Stack direction={['column', 'row']} spacing='24px' mt={5}> 
                    <TextareaCustom    
                        name="observacao"
<<<<<<< Updated upstream
                        label="Observação" 
=======
                        label="Observação"                 
                        value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."                 
>>>>>>> Stashed changes
                        onChange={handleForm}
                    />      
                </Stack>
                <Stack direction={['column', 'row']} spacing='24px' mt={5} justifyContent="center">
                    <Button variant='primary' size="md" px={7} leftIcon={<AddIcon />} value="Salvar" type="submit" >
                        Inserir
                    </Button>
                </Stack>
            </form>
            <Stack>
                {formulario &&
                    <ResponsiveTable 
                    datas={tabelaCobranca} 
                    tableConfig={tableConfig} 
                    viewFunction={viewFunction}
                    deleteFunction={deleteFunction}
                    fieldBody={'id'}
                />               
                }
            </Stack>             
        </Box>
    )
}

function callToast(arg0: string, arg1: string) {
    throw new Error("Function not implemented.");
}
