const pdf = require("html-pdf");
const ejs = require("ejs");

var nomeDoUsuario = "Antony";
var curso = "Formação Node.js";
var categoria = "Node";

ejs.renderFile("./meuarquivo.ejs", { nome: nomeDoUsuario, curso: curso, categoria: categoria }, (err, html) => {
    if (err) {
        console.log("ERRO!")
    } else {
        pdf.create(html, {}).toFile("./meuPdfLindao.pdf", (err, res) => {
            if (err) {
                console.log("UM ERRO ACORTECEU :(")
            } else {
                console.log(res);
            }

        })
    }
});

