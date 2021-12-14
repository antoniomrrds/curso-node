class Animal {
    constructor(nome, idade, preco) {
        this.nome = nome;
        this.preco = preco;
        this.idade = idade
    }

    ChecarEstoque() {
        return 10;
    }

    MetodoQualquer(){
        console.log('Esse método faz parte da classe mãe  !!!')
    }
}

class Cachorro extends Animal{
    constructor(nome, idade, preco,raca,cor){
        super(nome, idade, preco)
        this.raca = raca;
        this.cor =cor;
     

    }
    latir(){
        console.log('ROLF ROLF !!!')
    }
    ChecarEstoque(){
       return console.log('Na loja existe 20')
    }
    Idade(){
        console.log( this.idade)
    }
    MetodoQualquer(){
        super.MetodoQualquer()
       return console.log('Este metodo esta vindo do cão ');
    }
}

class Pato extends Animal{

}

let dog = new Cachorro('Dogão',5,250)
let chao = new Cachorro('chao chao',5,550,20)
let dagrao = new Animal('Dragão',5000,2500000000)

dog.latir()
dog.ChecarEstoque()
dog.MetodoQualquer()
chao.Idade()
