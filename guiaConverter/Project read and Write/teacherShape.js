const fs = require('fs')

function modificandoUsuario(nome,curso,categoria){
    const path = 'guiaConverter\\Project read and Write\\ReadWrite.json'
    fs.readFile(path,{encoding:'utf-8'},(erro, dados)=>{
        if(erro){
            console.log('Ops ocorreu um erro ao escrever o arquivo')
        }else{
            let conteudo ={} ;
            conteudo = JSON.parse(dados)
           conteudo.nome = nome;
           conteudo.curso = curso;
           conteudo.categoria = categoria;

            fs.writeFile(path,JSON.stringify(conteudo),(erro)=>{
                if(erro){
                    console.log('ops ocorreu um erro na escrita!')
                }
            })
        }
    })
}

modificandoUsuario('antonio','react','modulo react')


