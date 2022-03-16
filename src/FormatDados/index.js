const FormatDados = {
    data: function(minhaData){
        if(minhaData){

            let splitData = minhaData.split('/')
            let dia = splitData[0]
            let mes = splitData[1]
            let ano = splitData[2]
            const novaData = `${ano}-${mes}-${dia}`
            return novaData
        }
    }
    
}

export default FormatDados;