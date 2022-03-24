import { Button, Flex, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { InputCustom } from "../../components/Form/Input";
import { SelectCustom } from "../../components/Form/Select";
import GroupTable from "../../components/ResponsiveTable/GroupTable";
import { IGTableConfigProps } from "../../components/ResponsiveTable/IResponsiveTable";
import SubBody from "../../components/SubBody";
import { AuthContext } from "../../contexts/AuthContext";
import { ProcessoService } from "../../services";

export default function Orcamento(){
    const router = useRouter()
    const [tipoDeObra, settipoDeObra] = useState([]);
    const { callToast } = useContext(AuthContext)
    const [process, setProcess] : any = useState({})
    const [obras, setObras] : any = useState([])
    const [itemsObra, setItemsObra] : any = useState([])
    
    useEffect(() => {
        const {id} = router.query 
        router.isReady && getProcesso(id)         
    }, [router.isReady]);

    async function getProcesso(id){
        const response = await ProcessoService.getProcessById(id);
        await setObras(response.data.obras) 
        //console.log(response.data)       
        await setItemsObra(obras.items)         
    }    
    
    async function getSituacao(){
        const response = await ProcessoService.getSituacoes();
        settipoDeObra(response.data)
    }
    function handlerclick(){
            callToast('success', 'Adicionado com sucesso!')   
    }

    function fnDelete(data?){
        callToast("error", "Registro deletado com sucesso")
    }

    function editFunction(data?){
        callToast("success", "Registro alterado com sucesso")
    }
    
    const tableConfig : IGTableConfigProps = {
        head : {
            obraId: {
                name: 'Obra',
                mobileHead: true,
                headerGroup: true
            },
            processoId: {
                name: 'Processo',
                mobileHead: true,
            },
            total: {
                name: 'Total',
                mobileBody: true,
                footer : true
            },
            subtotal : {
                name: 'Subtotal',
                mobileBody: true,
                footer : true
            }            
        },
        items: {
            structure: {
                OS : {
                    name : 'OS',
                    mobileBody: true
                },
                descricao: {
                    name : 'Descrição',
                    mobileBody: true
                },
                quantidade: {
                    name: 'Quantidade',
                    mobileBody: true,
                    group: 'subtotal'
                },
                preco: {
                    name : 'Preço',
                    mobileBody: true,
                    group: 'total'
                },                      
            }
        }
    }

    return(        
        <>
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
                    <Button variant='primary'size="lg" onClick={handlerclick}>
                        Buscar 
                    </Button>
                </Flex>
            </Flex>
            <SubBody>
                <GroupTable
                  datas={obras}
                  tableConfig={tableConfig}
                  editFunction={editFunction}
                  deleteFunction={fnDelete} />
            </SubBody>
            
          
        </>
        
    )
}