const express = require('express')

const app = express()

//Estou dizendo para o exprss usar o EJS como View engine
app.set('view engine','ejs');

//Abaixo voce tem que criar a pasta public para trabalhar com dados statico
app.use(express.static('public'))

// app.get('/:nome/:lang',(req,res) => {
app.get('/:msg',(req,res) =>{ 
    // let nome= req.params.nome;
    // let lang= req.params.lang;
    let nome ="Antonio"
    let lang =  "php"
    let msg = req.params.msg;
    let exibirSmg = true

    let produtos =[
        {nome:"Doritos",preco:4},
        {nome:"Fandango",preco:5},
        {nome:"Coca Cola",preco:12},
        {nome:"Guarana antartica",preco:10},
        {nome:"Picanha",preco:100},
    ]
   
    // res.send("Bem vindo ao meu site!")
    res.render("html",{
        nome:nome,
        lang:lang,
        empresa: "Guia do Programador",
        inscritos:8080,
        msg:exibirSmg,
        msgParam:msg,
        produtos:produtos
    });
});

const porta = 8080
app.listen(porta,_=>console.log(`App rodando na porta ${porta} !!!`))
// ejs => serve para desenhar html no lado do servidor