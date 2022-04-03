class Leitor{
    Escrever(arquivo){
        console.log("Conteúdo Do Arquivo !!!")
    }
}
class Escritor{
    Escrever(arquivo,conteudo){
        console.log("Conteúdo Escrito !!!")
    }
}
class Criador{
    Criar(nome){
        console.log("Conteúdo Escrito !!!")
    }
}

class Destruidor{
    Deletar(nome){
        console.log('Deletando arquivo !!!')
    }
}

class ManipulatorDeArquivo{
    constructor(nome){
        this.arquivo = nome
        this.leitor = new Leitor()
        this.escritor = new Escritor()
        this.criador = new Criador()
        this.destruidor = new Destruidor()
    }
}

class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new Criador();
        this.escritor = new Escritor();

    }
    SalvarListaDeUsuarios(Lista){
        this.criador.Criar('usuarios.txt')
        this.escritor.Escrever('usuario.txt',Lista)
    }
}

let manipulador = new  ManipulatorDeArquivo('meusAruivos.txt')
manipulador.leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.destruidor.Deletar();
