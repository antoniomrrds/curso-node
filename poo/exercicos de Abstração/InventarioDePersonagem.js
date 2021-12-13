export class InventarioDePersonagem{
    constructor(){
        this.espaco;
        this.status;
        this.item;
    }
    organizar(){
        console.log('Organizando !!!')
    }
    adicionarItem(){
        return this.item +1
    }
    remover(){
        return this.item-1
    }
    adicionarEspaco(){
        return this.espaco+1
    }
}