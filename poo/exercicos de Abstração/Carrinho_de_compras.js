export class CarrinhoDeCompras{

    constructor(){
        this.descricao ='',
        this.quant = 0;
        this.preco =0;
        this.total=0
        this.desconto=0
    }

    total(){
        return this.quant * this.preco
    }
    desconto(){
        return preco *(1-desconto)
    }
}
// let price =100
// let discont=0.5
// console.log(price*(1-discont))



