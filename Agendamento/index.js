const express = require("express");
const app = express();
const mongoose = require("mongoose");
const AppointmentService = require("./services/AppointmentService.js");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/cadastro", (req, res) => {
    res.render('create');
});

app.post("/create", async (req, res) => {

    var status = await AppointmentService.Create(
        req.body.name,
        req.body.email,
        req.body.description,
        req.body.cpf,
        req.body.date,
        req.body.time
    )
    if (status) {
        res.redirect("/");
    } else {
        res.send("Ocorreu uma falha!");
    }
});


app.get("/getcalendar", async (req, res) => {
    const consultas = await AppointmentService.GetAll(false);
    res.json(consultas);
})
app.get("/event/:id", async (req, res) => {
    var appointment = await AppointmentService.GetById(req.params.id);
    if (appointment == false) {
        return res.redirect("/");
    }
    res.render("event", { appo: appointment });
})

app.post("/finish", async (req, res) => {
    var id = req.body.id;
    var result = await AppointmentService.Finish(id);
    res.redirect("/");
})

app.get('/list', async (req, res) => {
    var appos = await AppointmentService.GetAll(true);
    res.render('list', { appos })
})

app.get("/searchresult", async (req, res) => {
    var appos = await AppointmentService.Search(req.query.search);
    res.render('list', { appos })
})

const polltime = 1000*60

setInterval(async () =>{
    await AppointmentService.SendNotification();

},polltime);

const PORT = 8080
mongoose.connect("mongodb://localhost:27017/agendamento", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(_ => {
        app.listen(PORT, _ => console.log(`Server On ${PORT}`))
    })
    .catch(err => console.log(err))
mongoose.set("useFindAndModify", false);
