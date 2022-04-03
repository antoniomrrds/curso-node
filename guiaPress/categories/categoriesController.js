const express = require('express')
const router = express.Router();
const Category = require('./Category')

// slugify e uma forma de salvar os dados com tracinho  desta forma  AntÔnio Marcos  ficaria assim => antonio-marcos
const slugify = require('slugify')


router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new');
})
// formulario sempre o post
router.post('/categories/save', (req, res) => {

    let title = req.body.title

    if (title !== undefined && title !== null) {
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(_ => res.redirect("/admin/categories"));

    } else {
        res.redirect('/admin/categories/new')
    }
})


router.get('/admin/categories', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/categories/index', { categories: categories });
    });
});

router.post("/categories/delete", (req, res) => {
    const id = req.body.id;
    if (id !== undefined) {
        if (!isNaN(id)) {
            Category.destroy({
                where: {
                    id: id
                }
            }).then(_ => res.redirect('/admin/categories'));
        } else {
            //Não for um número
            res.redirect('/admin/categories');
        }
    } else {//Null
        es.redirect('/admin/categories');
    }
})

router.get("/admin/categories/edit/:id",(req,res)=>{
    console.log("entrou")
    let id  = req.params.id;
    
  Category.findByPk(id).then(categories => {

    if(categories != undefined){

        res.render("admin/categories/edit", {categories: categories})
    }else{
        res.redirect("/admin/categories")
    }
  }).catch( err => {
      res.redirect("/admin/categories")
  })

});

router.post("/categories/update",(req,res)=>{
    let  id =  req.body.id;
    let  title =  req.body.title;

    Category.update({title: title,slug:slugify(title)},{
        where:{
            id:id
        }
    }).then(()=>{
        res.redirect("/admin/categories");
    } )
})

module.exports = router;