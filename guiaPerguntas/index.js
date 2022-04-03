const express = require('express')
const app = express()
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")
const Resposta = require("./database/Resposta")

connection
      .authenticate()
      .then(() => console.log("Conexão com o banco de dados"))
      .catch((msgeRRor) => console.log(msgeRRor))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

//Estou dizendo para o exprss usar o EJS como View engine

//Abaixo voce tem que criar a pasta public para trabalhar com dados statico
app.use(express.static('public'))

app.get('/', (req, res) => {
      Pergunta.findAll({
            raw: true, order: [
                  ['id', 'DESC']// ASC = Crescente || DESC Decresente
            ]
      }).then(perguntas => {
            res.render("index", {
                  perguntas: perguntas
            });
      })

})

app.get('/perguntar', (req, res) => {
      res.render("perguntar");
})

app.post('/salvarPergunta', (req, res) => {
      let titulo = req.body.titulo;
      let descricao = req.body.descricao;
      if (titulo && descricao) {
            Pergunta.create({
                  titulo: titulo,
                  descricao: descricao
            }).then(() => {
                  res.redirect("/");
            })
      } else {

            console.log("não enviado !!!")
            res.redirect("/");
      }
});

app.post("/responder", (req, res) => {
      let corpo = req.body.corpo;
      let pergunta = req.body.pergunta;
      
      if (corpo) {

            Resposta.create({
                  corpo: corpo,
                  perguntaId: pergunta
            }).then(() => {
                  res.redirect(`/pergunta/${pergunta}`);
            })

      } else {
            res.redirect(`/pergunta/${pergunta}`);
            console.log("não enviado !!!")

      }
      // create equivale o insert
})

app.get("/pergunta/:id", (req, res) => {
      let id = req.params.id;

      Pergunta.findOne({
            where: { id: id }
      }).then(pergunta => {
            if (pergunta != undefined) {
                  Resposta.findAll({
                        where: {
                              PerguntaId: pergunta.id
                        },
                        order: [['id', 'DESC']
                        ]
                  }).then(respostas => {

                        res.render("pergunta", {
                              pergunta: pergunta,
                              respostas: respostas
                        });
                  })

            } else {
                  res.redirect("/");
            }
      });

})

const porta = 8080
app.listen(porta, _ => console.log(`App rodando na porta ${porta} !!!`))
// ejs => serve para desenhar html no lado do servidor