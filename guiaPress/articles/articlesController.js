const express = require('express')
const router = express.Router();
const Category = require('../categories/Category')
const Article = require("./Article")
const slugify = require("slugify")


router.get('/admin/articles', (req, res) => {
    Article.findAll({
        include: [{ model: Category }]
    }).then(articles => {
        res.render("admin/articles/index", { articles: articles })
    })
})

router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new", { categories: categories })
    })
})

router.post('/articles/save', (req, res) => {
    const title = req.body.title
    const category = req.body.category
    const body = req.body.body

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect('/admin/articles')
    })

})

router.post("/articles/delete", (req, res) => {
    const id = req.body.id;
    if (id !== undefined) {
        if (!isNaN(id)) {
            Article.destroy({
                where: {
                    id: id
                }
            }).then(_ => res.redirect('/admin/articles'));
        } else {
            //Não for um número
            res.redirect('/admin/articles');
        }
    } else {//Null
        es.redirect('/admin/articles');
    }
})

router.get('/admin/articles/edit/:id', (req, res) => {
    let id = req.params.id
    Article.findByPk(id).then(article => {
        if (article != undefined) {
            Category.findAll().then(categories => {
                res.render("admin/articles/edit", {
                    categories: categories,
                    article: article
                });
            })

        } else {
            res.redirect('/')
        }
    })
})


router.post('/articles/update', (req, res) => {
    let id = req.body.id
    let title = req.body.title
    let body = req.body.body
    let category = req.body.category

    Article.update(
        {
            id: id,
            title: title,
            body: body,
            categoryId: category,
            slug: slugify(title)
        }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/articles")
    }).catch(err => {
        res.redirect('/')
    })

})

router.get("/articles/page/:num", (req, res) => {
    let page = req.params.num
   
    let offset = 0
    let limit = 4
    offset =(isNaN(page) || page == 1)? 1:(parseInt(page)-1 )* limit
    

    Article.findAndCountAll({
        limit: limit,
        offset: offset,
        order:[
            ['id','DESC']
      ]
      
    }).then(articles => {
        let next = (offset + limit >= articles.count) ? false : true
         
        let pages = Math.ceil(articles.count/limit)  
        let pagesNumber =[]
         Array(pages).fill().map((a,i=1)=>pagesNumber.push(i+1))
        var result = {
            page:parseInt(page),
            next: next,
            articles: articles,
            pages:pagesNumber
        }
        console.log(result.pages)      
        
        Category.findAll().then(categories => {
            res.render("admin/articles/page", {
                categories: categories,
                result: result
            
            })
        })
      
    })

})

module.exports = router;