//substitui o callback a promisse pois ela espera a resposta acontecer
const enviarEmail= (corpo,para) => {
    return new Promise((resolve,reject)=>{
        setTimeout (() =>{
            let err = true;
            if(!err){
                resolve('fufou cumpri a  promessa')
            }else{
                reject('não cumpri a promesa')
            }
        },4000)
    })

}

enviarEmail('Olá Mundo','arqueiroverd@gmail.com').then((err)=>{
    console.log(err)
    console.log('voce cumpriu a promessa')
}).catch((err)=>{
    console.log(err)
    console.log('Que pena nao consegui')
});