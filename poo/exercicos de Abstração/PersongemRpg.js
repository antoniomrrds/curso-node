class PersonagemRpg{
    constructor(){
        this.nome='';
        this.habilidade=0
        this.ataque=0;
        this.defesa=0;
        this.vida=0;
        this.energia=0
        this.dano =0
    }
    ataque(){
        this.ataque+1
    }
    defesa(){
        this.defesa+1
    }
    vida(){
        this.vida+1
    }
    energia(){
        this.energia+1
    }
    dano(){
        this.vida- this.dano+1
    }
    habilidade(){
        this.habilidade
    }

}