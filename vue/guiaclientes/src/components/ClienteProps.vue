<template>
  <div :class="{ cliente: !isPremium, 'cliente-premium': isPremium }">
    <!-- <h4>Nome: {{nome}}</h4>
      <hr>
      <p>descricao:{{descricao}}</p>
      <p>Número: {{Número}}</p>
      <p>Email: {{email}}</p>
    <p>idade: {{idade}}</p> -->

    <h1>Lista de dados</h1>
    <h2>Com Objeto</h2>

    <h4>Nome: {{ cliente.nome }}</h4>

    <p>Email: {{ processarEmail }}</p>
    <p>idade: {{ cliente.idade }}</p>
    <button @click="changeColor($event)">Mudar Cor</button><br>
    <button @click="emitirEventoDelete($event)">Deletar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPremium: false,
    };
  },
  props: {
  
    nome: String,
    idade: Number,
    descricao: String,
    cliente: Object,
  },

  methods: {
     changeColor($event){
      console.log($event)
      this.isPremium = !this.isPremium;
    },
    emitirEventoDelete:function(){
      console.log('emitindo do filho')
      this.$emit("meDelete",{
        curso:'Formação node js',
        emPromocao:true,
        idCliente:this.cliente.id,
        component:this
        
      })

    }
  },
  computed:{
     processarEmail(){
       return this.cliente.email.toUpperCase()

  }
  }
};
</script>

<style>
.cliente {
  color: green;
  background: black;
  max-width: 600px;
  height: 100;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 10px auto;

  padding: 5px;
}

.cliente-premium {
  color: yellow;
  background-color: #000;
  max-width: 600px;
  height: 100;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 10px auto;

  padding: 5px;
}

h4 {
  text-align: center;
  background: orangered;
  color: black;
  border-bottom: red 6px solid;
}
</style>