function pegarId(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(5)
        },1500)
    })
}

function buscarEmailNoBanco(id) {
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve('Email achado no Banco !!!!')
          },4000)  
        })
    
}


function enviarEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let err = false;
            if(!err){
                resolve('Email enviado')
            }else{
                reject('Fila de emails cheia ');
            }

        },4000)
    })
}


console.log('Inicio')
pegarId().then(id=>{
    buscarEmailNoBanco(id).then(email=>{
        enviarEmail('Olá como vai',email).then(()=>{
            console.log('Email enviado, para o usuario com id: '+id)
        }).catch(err=>{
            console.log(err)
        })
    })
})
console.log('Fim')