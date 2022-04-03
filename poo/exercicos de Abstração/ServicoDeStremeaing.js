export class Streaming{
    constructor(){
        this.tempo=0;
        this.tamanho;
        this.name= '';
        this.category='';
        this.avancar=0;
        this.voltar=0


    }

    pausar(){
        console.log('Pusado')
    }
    
    continuar(){
        console.log('Continuar')
    }
    repetir(){
        console.log('Repetindo')
    }
   avancar(){
       console.log('Avancar')
   }
   voltar(){
       console.log('Voltar')
   }
}