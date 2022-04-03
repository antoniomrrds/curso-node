<template>
  <div class="cliente-premium">
    <h3>Olá mundo</h3>
    <h3>Nome</h3>
  
    <input type="text" :value="nome">
    <p>{{descricao}}</p>
    <hr>
    
    <input type="text" v-model="nome">
    <p>{{nome}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            nome:'Antonio marcos ',
            email:'',
            idade:0,
            descricao:'lorem ipsum Lorem Ipsun 23123'

        }
    }
};
</script>

<style scoped>
.cliente {
  color: green;
  background: black;
  max-width: 600px;
  height: 100;
  display: block;
  
   padding: 5px;
}
h3 {
    
  text-align: center;
  background: orangered;
  color: black;
}

</style>