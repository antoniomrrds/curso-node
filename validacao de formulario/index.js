const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('express-flash')
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser('jail'))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(flash());

app.get('/',(req,res)=>{
  
  var emailError = req.flash("emailError");
  var pontosError = req.flash("pontosError");
  var nomeError = req.flash("nomeError");
  var email = req.flash("email");

  emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
  email = (email == undefined || email.length == 0) ? "" : email;

  res.render("index",{emailError,pontosError,nomeError,email: email });

})


app.post("/form",(req, res) => {
  var {email, nome, pontos} = req.body;

  var emailError;
  var pontosError;
  var nomeError;

  if(email == undefined || email == ""){
      emailError = "O e-mail não pode ser vazio";
  }

  if(pontos == undefined || pontos < 20){
      pontosError = "Você não pode ter menos de 20 ponto";
  }

  if(nome == undefined || nome == ""){
      nomeError = "O nome não pode ser vazio";
  }

  if(nome.length < 4){
      nomeError = "O nome é mt pequeno";
  }

  if(emailError != undefined || pontosError != undefined || nomeError != undefined){
      req.flash("emailError",emailError);
      req.flash("pontosError",pontosError);
      req.flash("nomeError",nomeError);

      req.flash("email",email);

      res.redirect("/");
  }else{
      res.send("SHOW DE BOLA ESSE FORM!");
  }
});

const PORT = 1000
app.listen(PORT, _=> console.log(`SERIVDOR RODANDO NA PORTA ${PORT}`))