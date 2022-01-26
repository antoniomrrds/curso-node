const express = require('express')
const app = express();
const cors = require('cors')
const connection = require('./database/database')
const gamesController = require('./games/gamesController')

connection
    .authenticate()
    .then(_ => console.log('Conexão bem sucedida com o banco de dados !!! '))
    .catch((error) => console.log(error))

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/',gamesController)

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor esta rodando na porta : ${PORT} !!!`))
