const express = require('express')

const router = express.Router()

const Games = require('./GamesTable');

const validation = require('../validation/validation');
const { empty } = validation();

//read 
router.get('/games', async (req, res) => {
    try {
        const games = await Games.findAll();
        (games == null || games.length == 0) ? res.sendStatus(404) : res.status(200).json(games);
    } catch (err) {
        res.sendStatus(500)
    }
});

//create
router.post('/game', async (req, res) => {
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
            try {
                const gameCreated = await Games.create(obj)
                res.sendStatus(201);
            } catch (err) {
                res.sendStatus(500);
            }
        }
    } else {
        res.sendStatus(400);
    }
})

//read id
router.get("/game/:id", async (req, res) => {
    let id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400);
    } else {
        try {
            const gameId = await Games.findOne({ where: { id: id } });
            (gameId == null) ? res.sendStatus(404) : res.status(200).json(gameId);
        } catch (err) {
            res.sendStatus(500)
        }

    }
})


// update
router.put('/game/:id', async (req, res) => {

    const id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400);
    } else {
        const gameId = await Games.findOne({ where: { id: id } })
        if (gameId == null) {
            res.sendStatus(404);
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
                    try {
                        const gameUpdate = await Games.update(obj, { where: { id: id } })
                        res.sendStatus(200);
                    } catch (err) {
                        res.sendStatus(500);
                    }
                }
            } else {
                res.sendStatus(400)
            }
        }
    }
})

//delete

router.delete('/game/:id',async (req, res) => {
    const id = req.params.id
    if (isNaN(id)) {
        res.sendStatus(400)
    } else {
        const gameId = await Games.findOne({ where: { id: id } })
        if (gameId == null) {
            res.sendStatus(404);
        } else{
            try{
                const  gameDelete =await Games.destroy({where: {id: id}})
                res.sendStatus(200);
            }catch(err){
                res.sendStatus(404);
            }
        }
    }
})

module.exports = router;