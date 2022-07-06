// let transporter = nodemailer.createTransport({
//   service: 'smtp.gmail.com',
//     port: 587,
//     secure: true,
//     auth: {
//         user: "kuronekochan178@gmail.com",
//         pass: "Reis23101996"
//     }
// })

const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
 
var transporter = nodemailer.createTransport(
    smtpTransport({
        host: 'smtp.gmail.com', 
        port: 465, 
        secure: true, 
        service: 'Gmail', 
        auth: { 
            // deve fazer o a autentificacao de dois fatores e depois pegar a asenha gerada para aplicaçoes

            user: "seuemail@gmail.com",
            pass: "sua senha de dois fatores"
        }, 
        tls: { 
            rejectUnauthorized: false 
        } 
    }));


transporter.sendMail({
    from: "Antony dev <antoniomarcos@risedever.com.br>",
    to: "antoniomarcos.amrrds@gmail.com ,arqueiroverd@gmail.com,antoniomarcosreis2020@outlook.com ",
    subject: "Olá sou o Antonio e sou um dev em asencao !!!",
    text: "O email chegou !!!",
    html: `<h1>Antony is good !!!</h1>
    <br>
    <h1>I am the best !!!</h1>
    `
}).then(msg => {
    console.log(msg)
}).catch(err => {
    console.log(err)
})