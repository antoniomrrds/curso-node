const express = require("express")
const app = express()
const pk= "Jovem padawan"
const porta = 4000

//Lembre se voce pode apenas retornar uma resposta

//Sempre tem que enviar uma resposta
app.get('/imagem', function(req,res){

res.send(`<img class="NOVO" src="https://images4.alphacoders.com/665/thumbbig-665374.webp" alt="asd" width="500" height="600">`)
});

// parametros :e nome do parametro

app.get('/meuMundo/:nome', function(req,res){
    //REQ => Dados Enviados pelo usuário
    //RES => Resposta que vai ser enviada para o usuário

   const name =  req.params.nome 
    if(name === 'Antonio')   return res.send(`O grande ${name}`)
    else  return res.send(`Seja bem vindo`)
    });
//Nete exemplo abaixo tem umm exemplo de o query params 
//para poder pegar direto da url usa a integoração e o nome e valor de atribuição= ?canal=scorpion
app.get('/youtube', function(req,res){
    let canal = req.query["canal"]
    if(canal) res.send(canal)
     res.send(`<iframe width="560" height="315" src="https://www.youtube.com/embed/XYvLMjftrVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    });



app.listen(porta, function (erro) {
    if (erro)
        console.log("Ocorreu um erro!")
    else {
        console.log(`Servidor On ${pk} na Porta ${porta} !!!`)
    }
})

