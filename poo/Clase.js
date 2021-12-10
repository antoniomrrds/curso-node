//Abstração e pegar algo real e tornar em entidades
class Filme{
    constructor(){
        this.titulo='',
        this.nome='',
        this.genero='',
        this.ano=0,
        this.diretor=0,
        this.atores=[],
        this.duracao=0
    }

    Reproduzir(){
        console.log('Reproduzindo ...')
    }
    Avancar(){
        console.log('Avancar =>')
    }
    Pausar(){
        console.log('pausado !!!')
    }
    Fechar(){
        console.log('Fechar x')
    }
}