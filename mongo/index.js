const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/aprendendoMongo", { useNewUrlParser: true, useUnifiedTopology: true })

const articleModel = require('./article')

const Article = mongoose.model("Article", articleModel);
//cadastro 
// const artigo = new Article({
//     title:"angular",
//     author:"Antonio",
//     body:"E muito bom aprender Angular",
//     resume:{
//         content:"Angular inicio",
//         author:'Antony'
//     }
// })



// artigo.save().then(()=>{
//     console.log("Artigo salvo")
// }).catch(err =>{
//     console.log(err)
// })

// buscar todos os dados
// resultado se nao achar e um array vazio 
// Article.find().then(articles => {
//     console.log(articles.length)
//     console.log(articles);
// }).catch(err => {
// console.log(err)    
// })

// removendo um dado
// Article.findByIdAndDelete("6272c555849142815075d1a0").then(_=>{
//     console.log("Dado removido")
// }).catch(err =>{
//     console.log(err)
// })


// update de um dado

// Article.findByIdAndUpdate("6276e6dbba1ed7177096b656", {
//     $set: {
//         resume: [{
//             data: {
//                 author: "Antony",
//                 level: "Padawan"
//             }
//         }]


//     }
// })
//     .then(_ => {
//         console.log("Update!")
//     })
//     .catch(err => {
//         console.log(err)
//     })

// Buscar um dado aprenas
// resultado se não achar e null
Article.findOne({ '_id': "6276e6dbba1ed7177096b656" }).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err)
})