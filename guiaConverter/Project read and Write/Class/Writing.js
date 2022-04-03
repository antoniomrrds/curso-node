const fs = require('fs')
 
class Writing{
    write(path,newWrite){
       fs.writeFile(path,newWrite,(err)=>{
           if(err){
               console.log('Houve um erro ao salvar o Arquivo  !!!')
           }
       }) 
    }
}

module.exports = Writing