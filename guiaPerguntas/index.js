const express = require('express')
const app = express()
const connection = require("./database/database")
connection  
      .authenticate()
      .then(()=>console.log("Conexão com o banco de dados"))
      .catch((msgeRRor)=> console.log(msgeRRor))

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('view engine','ejs');

//Estou dizendo para o exprss usar o EJS como View engine

//Abaixo voce tem que criar a pasta public para trabalhar com dados statico
app.use(express.static('public'))


app.get('/',(req,res) =>{ 
      res.render("index");
})
app.get('/perguntar',(req,res) =>{ 
      res.render("perguntar");
})
app.post('/salvarPergunta',(req,res) =>{ 
      let titulo = req.body.titulo;
      let descricao = req.body.descricao;
      console.log(descricao)
      res.send(`Titulo ${titulo} e a Descrição : ${descricao}`);
})
const porta = 8080
app.listen(porta,_=>console.log(`App rodando na porta ${porta} !!!`))
// ejs => serve para desenhar html no lado do servidor