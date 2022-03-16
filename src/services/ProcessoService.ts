import { api } from "./base/apiClient"

class ProcessoService {
    listProcesses(){
        return api.get(`/processos`);
    }
    
    getProcessById(id) {
        return api.get(`/processos/${id}`)        
    }    
    
    
}

export default new ProcessoService();

