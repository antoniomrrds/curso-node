module.exports = validation =>{
const empty = value =>{
    if(typeof value == 'string' && !value.trim()){
        console.log('vazio')
        return true
    }else{
        console.log('nao esta vazio')
        return false 
    }
}
return {empty}
}


