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
    
    
}

export default new ProcessoService();

