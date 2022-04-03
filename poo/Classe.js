//Abstração e pegar algo real e tornar em entidades
class Filme{
   
    constructor(titulo,nome,genero,ano,diretor,duracao,atores=[]){
        this.titulo=(titulo)?titulo:'';
        this.nome=(nome)?nome:'';
        this.genero=(genero)?genero:'';
        this.ano = (ano)?ano:0;
        this.diretor=(diretor)?diretor:'';
        this.atores=(atores)?[atores]:[];
        this.duracao=duracao
    }

    Reproduzir(){
      return  console.log('Reproduzindo ...')
    }
    Avancar(){
       return console.log('Avancar =>')
    }
    Pausar(){
       return console.log('pausado !!!')
    }
    Fechar(){
       return console.log('Fechar x')
    }
    get ficha(){
       console.log('Titulo:'+this.titulo),
       console.log('Nome: '+this.nome),
       console.log('Genero: '+this.genero),
       console.log('Diretor: '+this.diretor),
       console.log('Ano: '+this.ano),
       console.log('Atores: '+this.atores)
       console.log('duracao: '+this.duracao)
      
    }
}

 module.exports = Filme