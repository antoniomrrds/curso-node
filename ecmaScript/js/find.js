let classico ={
    nome: "fusca",
    marca:'volkswagen'
}
let esportivo ={
    nome: "sandero",
    marca:'Renault'
}

let luxo ={
    nome:'Koenigsegg Agera R',
    marca:'Koenigsegg'
}

const array =[luxo,esportivo,classico]

//trás um objeto
const result = array.find(carros=> carros.nome === 'Koenigsegg Agera R')

console.log(result)