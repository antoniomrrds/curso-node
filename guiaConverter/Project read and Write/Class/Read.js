const fs = require('fs')
class Read{
    read(pathFile,encoding='utf-8'){
        fs.readFile(pathFile,{encoding:encoding},(err,data)=>{
          
            if(err){
                console.log('Houve um erro ao ler o arquivo !!!' + err)   
            }else{
                console.log(data)
            }
        })
    }
   
    

}

module.exports = Read








