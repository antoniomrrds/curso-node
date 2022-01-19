const express = require('express')

const router = express.Router()

const Games = require('./GamesTable');

const validation = require('../validation/validation');
const { empty } = validation();


//read 
router.get('/games', (req, res) => {
    Games.findAll().then(data => {
        res.statusCode = 200;
        res.json(data)
    }).catch(err => {
        res.sendStatus(404);
    })

});

//create
router.post('/game', (req, res) => {
    const { title, price, year } = req.body;
    let obj = {
        title: title,
        year: year,
        price: price,
    }

    const keysObj = Object.keys(obj)

    const arrayData = keysObj.every(el => obj[el] != undefined)

    if (arrayData) {
        if (empty(obj.title)) {
            res.sendStatus(400);
        } else {
            Games.create({
                title: title,
                year: year,
                price: price
            })
                .then(
                    console.log('Game Criado !!!'),
                    res.sendStatus(201)
                )
                .catch(err => {
                    console.log('Ops houve um erro !!!' + err)
                    res.sendStatus(404);
                })

        }

    } else {
        res.sendStatus(400);
    }


})

//read id
router.get("/game/:id", (req, res) => {
    let id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400);
    } else {
        Games.findOne({
            where: {
                id: id
            }
        }).then(data => {
            res.statusCode = 201;
            res.json(data);
        }).catch(err => {
            res.sendStatus(404)
        })

    }
})


// update
router.put('/game/:id', (req, res) => {

    const id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400);
    } else {
        const { title, year, price } = req.body;
        let obj = {
            title: title,
            year: year,
            price: price,
        }
        const keysObj = Object.keys(obj)

        const arrayData = keysObj.every(el => obj[el] != undefined)

        if (arrayData) {
            if (empty(obj.title)) {
                res.sendStatus(400)
            } else {
                Games.update(
                    {
                        title: title,
                        year: year,
                        price: price,
                    }, {
                    where: {
                        id: id
                    }
                }
                ).then(_ => {
                    res.sendStatus(200);
                }).catch(err => {
                    res.sendStatus(404);
                })
            }

        } else {
            res.sendStatus(400)
        }

    }
})

//delete

router.delete('/game/:id', (req, res) => {
    const id = req.params.id
    if (isNaN(id)) {
        res.sendStatus(400)
    } else {
        Games.destroy({
            where:{
                id:id
            }
        }).then(_=>{
            res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(404);
        })

    }
})

module.exports = router;