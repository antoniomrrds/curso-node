export class PlayerDeVideo{
    constructor(){
        this.duracao;
        this.tempo;
        this.titulo;
        this.volume;

    }

    aumentar(){
        this.volume +1
    }
    diminuir(){
        this.volume -1
    }
    avancar(){
        this.duracao +1
    }
    retroceder(){
        this.duracao -1
    }
    pausar(){
        console.log('Pausado !!!')
    }
}