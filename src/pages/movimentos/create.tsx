import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProcessoService } from "../../services";

export default function CreateProcesso(){
    
    const router = useRouter()
    const [process, setProcess] = useState();
    
    useEffect(() => {
        const {id} = router.query 
        router.isReady && getProcesso(id)        
    }, [router.isReady]);

    async function getProcesso(id) {
        const response = await ProcessoService.getProcessById(id);
        console.log(response)
        setProcess(response.data)
    }
    
    return(
        <h1>{JSON.stringify(process)}</h1>
    )
}