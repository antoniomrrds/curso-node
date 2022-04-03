//lendo arquivos 

const fs = require('fs')
fs.readFile('guiaConverter/exemplo.txt',{encoding:'utf-8'},(err,data)=>{
    return (err)?console.log(`Ocorreu um erro !!! do tipo${err}`):console.log(data)
    

})




