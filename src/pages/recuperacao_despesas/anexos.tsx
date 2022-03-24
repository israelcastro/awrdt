import { CheckIcon, RepeatIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, FormControl, HStack, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { InputCustom } from "../../components/Form/Input";
import { SelectCustom } from "../../components/Form/Select";
import ResponsiveTable from "../../components/ResponsiveTable";
import { AuthContext } from "../../contexts/AuthContext";
import { ProcessoService } from "../../services";

export default function Anexos(props){
    const fileInicial = {        
        name:'', 
        lastModified: ''    
    }
    const anexo ={
        id: 0,
        valorTipo:0,
        tipo:'',
        arquivo: '' 
    }
    const [tipoAnexo, settipoAnexo] = useState([]);
    const { callToast } = useContext(AuthContext)
    const [process, setProcess] = useState([]);
    const [origemAnexo, setorigemAnexo] = useState();
    const router = useRouter();
    const [anexos, setAnexos] = useState([]);
    const [novoAnexo, setnovoAnexo] = useState(anexo);
    const [selectTipo, setSelectTipo] = useState('');
    const [valido, setValido] = useState(true);
    const [enableAcao, setEnableAcao] = useState(true);

    useEffect(() => {        
        const {id} = router.query 
        router.isReady && getProcesso(id) 
        getTipoAnexo()
        getOrigemAnexos()  
        setSelectTipo(tipoAnexo[0])
    }, [router.isReady]);

    useEffect(() =>{
        setAnexos(anexos => [...anexos, novoAnexo])
        /*if(process['anexos']){
            if(anexos.length == process['anexos'].length){
                setEnableAcao(true)
            }else{
                setEnableAcao(false)
            }
        }*/
    },[novoAnexo])

    async function getProcesso(id){
        const response = await ProcessoService.getProcessById(id);
        setProcess(response.data)
        setAnexos(response.data.anexos)
        console.log(anexos)
    }
    
    async function getTipoAnexo(){
        const response = await ProcessoService.getTipoAnexo();
        settipoAnexo(response.data)
    }

    async function getOrigemAnexos(){
        const response = await ProcessoService.getOrigemAnexo();
        setorigemAnexo(response.data)
    }

    const hiddenFileInput = React.useRef(null);
    
    async function handlerclick(){
        await hiddenFileInput.current.click();
    }

    async function handleChange(event){
        const fileUploaded = await event.target.files[0];
        console.log("RETORNO" + fileUploaded)
        const valorTipo = parseInt(selectTipo);
        const textoTipo = tipoAnexo[selectTipo].value;
        setnovoAnexo({
            id: anexos.length+1,
            valorTipo: valorTipo,        
            tipo: textoTipo,
            arquivo: fileUploaded.name
        })
        
    }
    
  
    function insertTipo(e){       
        setSelectTipo(e.target.value)       
        console.log(selectTipo)
    }

    function enableFile(){
        setValido(false)
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

    function SalvarAnexos(){
        callToast('success', 'Arquivo Salvo com Sucesso!')
        console.log("função de inserir anexos ao processo no banco")
        console.log(anexos)
    }
    
    function CancelarAnexos(){
        callToast('error', 'Os arquivos carregados não foram salvos!')
        setAnexos(process['anexos'])
    }
    
    const tableConfig = {
        head : {
            id: {
                name: 'ID',
                mobileHead: true
            },
            tipo: {
                name: 'Tipo',
                mobileBody: true
            },
            arquivo: {
                name: 'Arquivo',
                mobileBody: true
            },
        }
    }
    return(
        
        <>  
            <Flex justifyContent="space-between" flex={1} border='1px' borderColor='gray.200' p={3}> 
                <Stack direction={['column', 'row']} spacing={5} flex={0.9}>
                    <SelectCustom
                        name='tipo'
                        label="Tipo:"
                        placeholder="Selecione o tipo"
                        options={tipoAnexo}
                        onChange={insertTipo}
                        isInvalid = {valido}
                        errorBorderColor='crimson'
                    /> 
                    <SelectCustom 
                        name="origem"
                        label="Origem:"
                        placeholder="Selecione a origem"
                        options={origemAnexo}
                        onChange={enableFile}
                        isInvalid = {valido}
                        errorBorderColor='crimson'
                    />
                     <InputCustom 
                        name="codigo"
                        label="Código:"
                        value={process['processo']}
                        isDisabled={true}
                    />
                </Stack>
                <Flex alignItems="flex-end">
                    <Button variant='primary' size="lg" onClick={handlerclick} isDisabled={valido}>
                        Carregar
                    </Button> 
                    <input type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{display:'none'}} 
                    />   
                </Flex>
                  
            </Flex>
            <Stack>
                <ResponsiveTable 
                    datas={anexos} 
                    tableConfig={tableConfig} 
                    viewFunction={viewFunction}
                    deleteFunction={deleteFunction}
                    fieldBody={'id'}
                />               
            </Stack>
            <Flex justifyContent="flex-end" flex={1} border='1px' borderColor='gray.200' p={3}> 
                <Stack spacing={2} direction="row">
                    <Button variant="success" size="md" leftIcon={<CheckIcon />} onClick={SalvarAnexos} isDisabled={valido}>
                        Salvar
                    </Button>
                    <Button variant="danger" size="md" leftIcon={<RepeatIcon />} onClick={CancelarAnexos} isDisabled={valido}>
                        Cancelar
                    </Button>
                    <Button variant="danger" size="md" leftIcon={<RepeatIcon />} onClick={CancelarAnexos} isDisabled={valido}>
                        Cancelar
                    </Button>
                </Stack>
                
            </Flex>
                  
        </>
        
    )
}


