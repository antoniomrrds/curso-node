export class StorieInstagran{
    constructor(){
        this.hora;
        this.status;
        this.gostei;
        this.naoGostei;
        this.corpo=[]
    }
    curtir(){
        return this.curtir +1
}
    naoGostei(){
        return this.curtir +1
}
}