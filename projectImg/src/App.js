const express = require("express");
const App = express();
const mongoose = require("mongoose");
const user = require("./models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();



// const JWT_SECRET= process.env.SECRET_JWT

const JWT_SECRET = '4545asdasdasdasdasdasda4sd5a'
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
mongoose.connect("mongodb://localhost:27017/guiapics", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(_ => { })
    .catch(err => console.log(err))

App.get("/", (req, res) => {
    res.json({});
})

const User = mongoose.model("User", user);

App.post("/user", async (req, res) => {

    try {
        const { name, email, password } = req.body
        if (name == "" || email == "" || password == "") {
            res.sendStatus(400);
            return;
        }
        const user = await User.findOne({ "email": email });

        if (user != undefined) {
            res.statusCode = 400;
            res.json({ error: "E-mail já cadastrado" });
            return;
        }

        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);

        const newUser = new User({ name, email, password: hash });
        await newUser.save();
        res.json({ email })
    } catch (err) {
        res.sendStatus(500)
    }
})

App.delete("/users/:email", async (req, res) => {
    await User.deleteOne({ "email": req.params.email })
    res.sendStatus(200);
})



App.post("/auth", async (req, res) => {
    let { email, password } = req.body;
    let user = await User.findOne({ "email": email });
    if (user == undefined) {
        res.statusCode = 403;
        res.json({ errors: { email: "E-mail não cadastrado" } });
        return;

    }

    let isPasswordRight = await bcrypt.compare(password, user.password)
    if (!isPasswordRight) {
        res.statusCode =403
        res.json({ errors: { password: "Senha incorreta" } })
        return;
    }

    jwt.sign({ email,name:user.name,id:user._id }, JWT_SECRET, { expiresIn: '48h' }, (err, token) => {
        if (err) {
            res.sendStatus(500);
            console.log(err)
        } else {
            res.json({ token })
        }
    });
})
module.exports = App;