import { api } from "./base/apiClient"

class ProcessoService {
    listProcesses(page?, limit?){
        return api.get(`/processos?page=${page}&limit=${limit}`)
    }
    
    getProcessById(id) {
        return api.get(`/processos/${id}`)        
    }
    
}

export default new ProcessoService();

