const express = require("express");
const app = express();
const socketio = require("socket.io");

//type of engine
app.set('view engine', 'ejs')
//working with ejs
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('index')
})

const DOOR = 3100

const server = app.listen(DOOR, _ => console.log("The server is on"))

const io = socketio(server)
io.on("connection", (socket) => {
    socket.on("disconnect" ,_=>{
        console.log("x Desconectou : " + socket.id)
    })

    socket.on("msg",(data) =>{
        io.emit("showMsg",data)
    })
})
