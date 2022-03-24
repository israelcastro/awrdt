import { api } from "./base/apiClient"

class ProcessoService {
    listProcesses(page?, limit?){
        return api.get(`/processos?page=${page}&limit=${limit}`)
    }
    
    getProcessById(id) {
        return api.get(`/processos/${id}`)        
    }

    getSituacoes(){
        return api.get(`/situacoes`)
    }

    getOrigens(){
        return api.get(`/origens`)
    }

    getTipoAnexo(){
        return api.get(`/tipoAnexos`)
    }
    
    getOrigemAnexo(){
        return api.get(`/origemAnexos`)
    }
    
    getTipoCobranca(){
        return api.get(`/tipoCobrancas`)
    }

    getSucessoCobranca(){
        return api.get(`/sucessoCobrancas`)
    }

    postTeste(dados){
        return api.post(`/teste`, {
            dados
        })
    }
}

export default new ProcessoService();

