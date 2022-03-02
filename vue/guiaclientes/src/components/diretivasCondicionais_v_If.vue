<template>


  <div :class="{'cliente':!isPremium,'cliente-premium':isPremium}">
      <!-- <h4>Nome: {{nome}}</h4>
      <hr>
      <p>descricao:{{descricao}}</p>
      <p>Número: {{Número}}</p>
      <p>Email: {{email}}</p>
    <p>idade: {{idade}}</p> -->
      
      <h1>Com Objeto</h1>
      <hr>

      <h4>Nome: {{cliente.nome}}</h4>
      <hr>
      <p>descricao:{{cliente.descricao}}</p>
      <p>Email: {{cliente.email}}</p>
    <p v-show="showIdade === true"> idade: {{cliente.idade}}</p>
    <p v-if="showIdade === true"> idade: {{cliente.idade}}</p>
    <p v-else> O usuário esta escondeu a idade !!! {{cliente.idade}}</p>
    <!-- <p v-else-if=""> O usuário esta escondeu a idade !!! {{cliente.idade}}</p> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      isPremium:false
    }
  }
,
    props:{
        nome:String,
        idade:Number,
        descricao:String,
        cliente:Object,
        showIdade:Boolean

    }

}
</script>

<style>
.cliente {
  color: green;
  background: black;
  max-width: 600px;
  height: 100;
  display:flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
margin: 10%;
    
   padding: 5%;
}

.cliente-premium{
  color:yellow;
  background-color: #000;
  max-width: 600px;
  height: 100;
  display: block;
  
   padding: 5px;
}

h4 {
    
  text-align: center;
  background: orangered;
  color: black;
}
</style>