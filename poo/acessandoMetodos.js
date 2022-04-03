// Aula 165 && 166
const Filme = require('./Classe')

let starWars = new Filme()
//metodos 165
starWars.Avancar()
starWars.Pausar()
//atributos 166
console.log(starWars.ano)
console.log(starWars.duracao=20)
let atores = ['bruce lee','jackie chan','tony jaa','jet lie']

//setando os atores dentro da intacia de Filme ou seja e um  objeto com atributo atores array
atores.map(ator => starWars.atores.push(`ator =>${ator} \n`))

console.log(`Atores =>\n ${starWars.atores}`.replaceAll(',',' '))

// console.log(starWars.atores)