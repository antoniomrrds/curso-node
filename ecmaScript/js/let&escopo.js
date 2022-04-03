let nome = 'antonio marcos'//variavel de escopo quando declarada por fora e global
var  sobrenome = 'santos' // globals

const pi = 3.14 //nao da pra reatibuir 

// a diferenca de let e var e esta

let teste = true
if(teste){
    var mundo = 'mundo'
    let ola = 'olá mundo'
    console.log(ola+' ' + nome + ' ' +sobrenome)

}

//ou seja e so no escopo que esta declarada o let 
// console.log(mundo+' '+ ola)