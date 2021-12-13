//Abstração e pegar algo real e tornar em entidades
class Filme{
    constructor(){
        this.titulo='',
        this.nome='',
        this.genero='',
        this.ano = 0
        this.diretor=0,
        this.atores=[],
        this.duracao=0
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
}

 module.exports = Filme