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
            let err = true;
            if(!err){
                resolve('Email enviado')
            }else{
                reject('Fila de emails cheia ');
            }

        },4000)
    })
}

//Para se tornar uma forma sincrona para isto serve o await e esperar
async function main(){
    console.log('Inicio')
    let pegar = await pegarId()
    let busca = await buscarEmailNoBanco(pegar)

    //tratamento de excessoes
    try{
        await enviarEmail('Olá como vai',busca)
        console.log('email enviado com sucesso')
    }catch(e){
        console.log('Você Errou!!!')
    }
    

}


main()

