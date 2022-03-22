export interface IResponsiveTable {
    /**
     * Objeto do banco que irá popular os dados da tabela
     * @type Array<Object>
     */
    datas: Array<Object> 
    /**
     * Objeto que irá configurar a tabela
     * 
     * head : {
     * 
     *   Nome do campo no DB : {
     * 
     *      name : String que irá aparecer no header, 
     *      mobileHead: Boolean que indica quem será o head da tabela mobile,
     *      mobileBody: Boolean que indica se irá aparecer na listagem, 
     *      isBoolean: Boolean para mostrar icones na tabela,
     *      child: String que indica o campo a buscar dentro de um objeto 
     *      isSum: Number que fará a soma no footer da tabela
     *    } 
     * }
     * @type SystemProps["alignItems"]
     */
    tableConfig: ITableConfigProps
    /**
     * Função da página pai que será usada ao clicar no botão editar
     * @type Function
     */
    editFunction?: Function
    /**
     * Função da página pai que será usada ao clicar no botão deletar
     * @type Function
     */
    deleteFunction?: Function
    /**
    * Função da página pai que será usada ao clicar no botão visualizar
    * @type Function
    */
    viewFunction?: Function
    /**
    * Objeto do banco que será usado no alerta de mensagem
    * @type string
    */
    fieldBody: string
    /**
    * String normal | group 
    * @type string
    */
     typeTable?: string
    
}

export interface ITableConfigProps{
    /**
     * Objeto que irá configurar a tabela
     * head : {
     *   campo do DB : {
     *      name : 'Nome que irá aparecer no header',
     *      mobileHead: Tipo boolean que indica quem será o head da tabela mobile
     *      mobileBody: Tipo boolean que indica se irá aparecer na listagem
     *      isBoolean: Tipo boolean para mostrar icones na tabela
     *      isSum: Tipo numérico que fará a soma no footer da tabela
     *      
     *   } 
     * }     
     * @type SystemProps["alignItems"]
     */
    head: Object
}

export interface IGTableConfigProps {
    head: Object 
    items: ItemsProps 
}


interface ItemsProps {
    name?: string
    structure : Object 
}

