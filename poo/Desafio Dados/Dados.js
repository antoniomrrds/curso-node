//Sistema de Cassino 
class Dado{
    constructor(tipodado,numeroFaces=6){
        this._tipodado=tipodado;
        this._numerofaces=numeroFaces
    }

    rolar(){
        let max = Math.floor( this._numerofaces);
        let min = Math.ceil(1)
        let toRoll = Math.floor(Math.random()*(max - min+1)) + min;
        return console.log(toRoll)
    }
}
//Varios tipos de dados

let d6 = new Dado('d6',6)
d6.rolar()
let d30 = new Dado('d30',30)
d30.rolar()