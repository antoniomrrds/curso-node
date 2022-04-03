
const database = require('./database')

const dados = {
    nome: "gta 5 ",
    preco: 300
}
// Aula insert dados


// const query = database.insert(dados).into('games').then(
//     data => console.log(data)
// ).catch(err => console.log(err))

// Aula select all  
//  database.select().table('games').then(data => console.log(data)).catch(err => console.log(`Error: ${err}`))
//  database.select().table('estudios').then(data => console.log(data)).catch(err => console.log(`Error: ${err}`))

// select com coluns
// database.select(["id","nome"]).table('games').then(data => console.log(data)).catch(err => console.log(`Error: ${err}`))

// //Select nested queries = uma querie dentro da outra
// database.insert({ nome: "Mists of noyah", preco: 25 }).into("games").then(data => {
//     database.select(["id","nome"]).table('games').then(data => console.log(data)).catch(err => console.log(`Error: ${err}`))

// }).catch(err =>{ 
//     console.log(err)
// })

// const query = database.where({nome:"Mists of noyah"}).table('games');
// console.log(query.toQuery())

// Aula de where


// database.select()
//     .whereRaw("nome = 'Mists of noyah' OR preco > 120")//serve para  fazer compuraçoes cru
//     .table('games')
//     .then(data => console.log(data))
//     .catch(err=> console.log(err))


// Se caso nao conseguir usar o knex para fazer uma query maluca use a funcao do 

// database.raw("Select * from games")
//     .then(data => console.log(data))
//     .catch(err => console.log(err))



// Aula delete 


// database.where({id:2}).delete().table('games')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// Aula de update

// database.where({id:1}).update({preco:1500}).table('games')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Aula de order by 

// database.select().table('games')
//     .orderBy('preco','asc')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Aula de insert em table com relacionamento
// database.insert({
//         nome:'activision',
//         game_id: 1
// }).table('estudios')
// .then(data => console.log(data))
// .catch(err => console.log(err))




// Aula de select relacionamnto 1 para 1

// database.select(['games.id','estudios.id as estudio_id','games.nome as game_nome','estudios.nome as estudio_nome'])
// .table('games')
// .innerJoin('estudios','estudios.game_id','games.id')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// // outra forma

// database.select(['games.*','estudios.nome as estudio_nome'])
// .table('games')
// .innerJoin('estudios','estudios.game_id','games.id')
// .then(data => console.log(data))
// .catch(err => console.log(err))


//Aula de join com where 

// database.select(['games.*','estudios.nome as estudio_nome'])
// .table('games')
// .innerJoin('estudios','estudios.game_id','games.id')
// .where('games.id',1)
// .then(data => console.log(data))
// .catch(err => console.log(err))



// Aula de relacionamento de 1 pra muitos

// database.select(['games.*','estudios.nome as estudio_nome'])
// .table('games')
// .innerJoin('estudios','estudios.game_id','games.id')
// .then(data =>{

//     const game = {
//         id:0,
//         nome:'',
//         estudios:[]
//     }
//     game.id = data[0].id;
//     game.nome = data[0].Nome; 

//     data.forEach(estudio =>{
//         game.estudios.push({nome:estudio.estudio_nome})
//     })
//     console.log(game)
// })
// .catch(err => console.log(err))



// inserts de multiplos games

// database.insert([
//     {nome:'Rockstar London'},
//     {nome:'Rockstar North'},
//     {nome:'Rockstar Games'},
//     {nome:'Rockstar San diego'},
// ])
// .table('estudios')
// .then(data => console.log(data))
// .catch(err => console.log(err))


//transaction e uma protecao em dados caso voce necessite q7ue o dado nao falha !!

// async function testeTransaction() {
//     try{
//          await database.transaction(async trans =>{
//            await database.insert([
//                     {nome:'Project red'},
//                     {nome:'Ubisoft'},
//                     {nome:'Santa monica'}
//                 ])
//                 .table('estudios')
//          })

//     }catch(err){
//      console.log(err)    
//     }

// }
// testeTransaction()

database.select().table('estudios').then(data => console.log(data)).catch(err => console.log(`Error: ${err}`))
