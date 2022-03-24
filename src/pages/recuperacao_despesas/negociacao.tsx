import { Box, Checkbox, Flex, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CheckboxCustom } from "../../components/Form/CheckboxCustom";
import FormGroup from "../../components/Form/FormGroup";
import { InputCustom } from "../../components/Form/Input";
import {GridCustom, GridItemCustom} from "../../components/GridCustom";
import TreeTable from "../../components/ResponsiveTable/TreeTable";
import SubBody from "../../components/SubBody";
import { ProcessoService } from "../../services";

export default function Negociacao() { 
    const router = useRouter()
    const [datas, setDatas] = useState([])
    

    useEffect(() => {
        const {id} = router.query 
        router.isReady && getProcesso(id)         
    }, [router.isReady]);

    async function getProcesso(id){
        const response = await ProcessoService.getProcessById(id);
        await setDatas(response.data.negociacao) 
                   
    }

    const tableConfig = {
        head: {
            id: {
                size : '5%'
            },
            tipo : {
                size : '20%'
            },
            CDC : {
                size : '20%'
            },
            dtVencimento : {
                size : '20%'
            },
            valor: {
                size : '20%'
            },
            situacao : {
                name: 'Situação',
                size : '15%'
            }            
        }
    }
    
    return (
        <>
            <Box mb={4}>
                <GridCustom cols={6} border={true}>
                    <GridItemCustom cols={2}>
                        <CheckboxCustom name="teste" label="Depósito/Transferência Bancária"/>
                    </GridItemCustom>
                    <GridItemCustom >
                        <InputCustom name="banco" label="Banco" />
                    </GridItemCustom>
                    <GridItemCustom >
                        <InputCustom name="agencia" label="Agência" />
                    </GridItemCustom>
                    <GridItemCustom >
                        <InputCustom name="cc" label="Conta corrente" />
                    </GridItemCustom>
                    <GridItemCustom >
                        <InputCustom name="banco" label="Data" />
                    </GridItemCustom>
                                    
                </GridCustom>
                <GridCustom cols={6} border={true}>
                    <GridItemCustom cols={2}>
                        <CheckboxCustom name="teste" label="Pagamento via RED"/>
                    </GridItemCustom>
                    <GridItemCustom cols={1}>
                        <InputCustom name="parcelas" label="Parcelas" />
                    </GridItemCustom>                                    
                </GridCustom>
                <GridCustom cols={6} border={true}>
                    <GridItemCustom cols={2}>
                        <CheckboxCustom name="teste" label="Parcelamento via Fatura"/>
                    </GridItemCustom>
                    <GridItemCustom cols={1}>
                        <InputCustom name="parcelas" label="Parcelas" />
                    </GridItemCustom>                                    
                </GridCustom>
            </Box>
            
            <TreeTable datas={datas} tableConfig={tableConfig}/>           
        </>
    )
}