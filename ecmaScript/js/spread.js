let nome = 'Antônio marcos'

let idade = 20 ;
let empresa ='Acsencion developer'


let empresas ={
    
    cidade:'bh x',
    site:'empresa.site',
    email:'x@gmail.com'
}

let user = {
    nome,
    idade,
   empresa,
   ...empresas
}

console.log(user)