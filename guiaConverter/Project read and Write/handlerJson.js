 const Read = require('./Class/Read')
 const Writing = require('./Class/Writing')

class handlerFile{
    constructor(pathFile){
        this.path = pathFile
        this.readFile = new Read()
        this.writingFile = new Writing()
    }
    read(){
      this.readFile.read(this.path)
    }
    write(newWrite){
        console.log(newWrite)
        this.writingFile.write(this.path,newWrite)
    }
}



let handlerJson = new handlerFile('guiaConverter/Project read and Write/ReadWrite.json')
let handlerTxt = new handlerFile('guiaConverter/exemplo.txt')

function newCurso(nome,curso,categoria){
    let json = {
        nome:nome,
        curso:curso,
        categoria:categoria
    }
    return JSON.stringify(json)

}
let curso = newCurso('react','react-native','react modulo')


handlerJson.read()
handlerJson.write(curso)



let text  = `Faça seus medos terem medo de você.
                                        Batman`



handlerTxt.read()
handlerTxt.write(text)

