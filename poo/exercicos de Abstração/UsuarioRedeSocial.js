export class Usuario{

    constructor(){
        this.name=0;
        this.email=0
        this.like=0;
        this.deslilke=0;
        this.descricao=0;
    }
        gostei(){
           return this.like +1
        }
        naogosto(){
            this.deslilke = -1
        }
        
    

}