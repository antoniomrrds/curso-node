const express = require('express')
const router = express.Router()
const User = require('./User')
const bcrypt = require('bcryptjs')

router.get('/admin/user', (req, res) => {
    User.findAll().then(users =>{
        res.render("admin/users/index",{users:users})
    })
})

router.get('/admin/users/create', (req, res) => {
    res.render('admin/users/create')
})

router.post('/users/create', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if (user == undefined) {

            let salt = bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(password, salt)

            User.create({
                email: email,
                password: hash
            }).then(_ => {
                res.redirect("/")
            }).catch(_ => {
                res.redirect("/")
            })

        } else {
            res.redirect("/admin/users/create")
        }
    });

});


module.exports = router