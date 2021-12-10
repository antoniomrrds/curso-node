/// a callback serve para mostrar que ja terminou a execução da função assincrona

const enviarEmail = (corpo,para,callback) =>{
    setTimeout(() =>{
        console.log(`
        Para: ${para}
        ---------------------------------------
        ${corpo}
        ---------------------------------------
        De: Antonio Marcos 

        `)
        callback()
    },4000)
}

console.log('Inicio de envio de e-mail')
enviarEmail('Olá seja Ben vindo a esta jornada','Antoniomarcos.amrrds@gmail.com',()=>{

    console.log('Seu e-mail foi enviado , deve chegar  em minutos');
    console.log('TUDO OK!')
})

