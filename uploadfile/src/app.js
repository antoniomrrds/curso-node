const express = require("express");
const app = express();
const multer = require("multer");

// como usar five icon
app.use("/favicon.ico",express.static("images/favicon.ico")) 


const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/")
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}_${file.originalname}`);
    }
})
app.set('view engine', 'ejs');

const upload = multer({storage})
app.get("/", (req, res) => {
    res.render("index");
})

app.post("/upload",upload.single("file"), (req, res) => {
    res.send("Arquivo recebido !")
})



module.exports = app;