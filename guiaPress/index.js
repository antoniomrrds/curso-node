const express = require('express');
const app = express();
const connection = require('./dataBase/dataBase')


const categoriesController = require('./categories/categoriesController')
const articlesController = require('./articles/articlesController')
const usersController = require('./user/UsersController')
const session = require('express-session')

const Category = require('./categories/Category')
const Article = require('./articles/Article');
const User = require('./user/User');

connection
      .authenticate()
      .then(_ => console.log('Conexão bem sucedida com o banco de dados !!! '))
      .catch((error) => console.log(error))


//tempo de seçao  e configuração ou seja tempo que o usuario ficara logado
//redis

//1000 = 1segundo
app.use(session({
      secret: 'scorpion',
      resave:true,
      saveUninitialized:true,
      cookie: {
            maxAge:60000
      }

}))






//View engine 
app.set('view engine', 'ejs');

// Static

app.use(express.static('public'));

//express bodyparser 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', categoriesController)
app.use('/', articlesController)
app.use('/', usersController)



//sessio de exemplo sobre continuar logado

app.get('/session',(req,res)=>{
      req.session.treinamento = 'Formaçaõ Node js'
      req.session.ano = 2019
      req.session.email = 'antoniomarcos.amrrds@gmail.com'
      req.session.user ={
            username:'antonio Marcos',
            email: 'antonioteste@gmail',
            id:10
      }
      res.send('sessão gerada !!!')
})
app.get('/leitura',(req,res)=>{
      res.json({
            treinamento:req.session.treinamento,
            ano: req.session.ano,
            email:req.session.email,
            user:req.session.user

      })
})


app.get('/', (req, res) => {
      Article.findAll({
            order: [
                  ['id', 'DESC']
            ],
            limit: 4
      }).then(articles => {
            Category.findAll().then(categories => {
                  res.render('index', { articles: articles, categories: categories });

            })
      })

})

app.get("/:slug", (req, res) => {
      let slug = req.params.slug;
      Article.findOne({
            where: {
                  slug: slug

            }
      }).then(article => {
            if (article != undefined) {

                  Category.findAll().then(categories => {

                        res.render('article', { article: article, categories: categories });

                  })
            } else {
                  res.redirect('/')
            }
      }).catch(err => {

            res.redirect('/')
      })
})


app.get("/category/:slug", (req, res) => {
      let slug = req.params.slug;
      Category.findOne({
            where: {
                  slug: slug
            },
            include: [{ model: Article }]
      }).then(category => {
            if (category != undefined) {
                  Category.findAll().then(categories => {
                        res.render("index", {
                              articles: category.articles,
                              categories: categories
                        })
                  });
            } else {
                  res.redirect('/')
            }
      }).catch(err => {
            res.redirect('/')
      })
})
const port = 1818;
app.listen(port, _ => console.log(`O servidor etá on na porta ${port} !!!`))