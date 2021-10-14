const express = require('express');
const app =  express();
const connection =  require('./dataBase/dataBase')


const categoriesController = require('./categories/categoriesController')
const articlesController = require('./articles/articlesController')


const Category = require('./categories/Category') 
const Article = require('./articles/Article') 
connection
      .authenticate()
      .then(_ => console.log('Conexão bem sucedida com o banco de dados !!! '))
      .catch((error) => console.log(error))

//View engine 
app.set('view engine','ejs');

// Static

app.use(express.static('public'));

//express bodyparser 
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/',categoriesController)
app.use('/',articlesController)

app.get('/',(req,res) => {
   res.render('index');

})

const port = 1818;
app.listen(port ,_=> console.log(`O servidor etá on na porta ${port} !!!`))