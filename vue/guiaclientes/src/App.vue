<template>
  <div id="main">
    <!-- <Cliente />
    <hr />
    <Produto />
    <hr />
    <h1>Props</h1> -->
    <!-- <DiretivaIf :cliente="clienteVue" :showIdade="false" />

    -->
    <div class="form-cliente">

  
      <h3>Cadastro:</h3>

      <input
        type="text"
        name="nome"
        placeholder="Nome"
        v-model="nomeField"
      />
     
      <small id="deuError" v-if="deuError">Ops Esqueceu do nome !!!</small>
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        v-model="emailField"
      /><br />
      <input
        type="number"
        name="idade"
        placeholder="Idade"
        v-model="idadeField"
      /><br />
      <button type="submit" @click="cadastrarUsuario">Cadastrar usuario</button>
    </div>

    <div v-for="cliente in orderClient" :key="cliente.id">
      <ClienteProps :cliente="cliente" @meDelete="deletarUsuario($event)"/>
    </div>
  </div>
</template>

<script>
// import Cliente from "./components/Cliente.vue";
// import Produto from "./components/Produto.vue";
import ClienteProps from "./components/ClienteProps.vue";

import _ from 'lodash';

export default {
  name: "App",
  components: {
    // Cliente,
    // Produto,
    ClienteProps,
  },
  data() {
    return {
      deuError: false,
      nomeField: "",
      emailField: "",
      idadeField: 0,

      clientes: [
        {
          id: 1,
          nome: "Antonio marcos",
          idade: 25,
          email: "antoniomarcos@gmail.com",
        },
        {
          id: 2,
          nome: "robert marcos",
          idade: 22,
          email: "robertMarcos@gmail.com",
        },
        {
          id: 2,
          nome: "marcos",
          idade: 22,
          email: "Marcos@gmail.com",
        },
      ],
    };
  },
  methods: {
  deletarUsuario($event){
    console.log('recebendo Evento !!!')
    console.log($event)
  
     const id =  $event.idCliente
      

    const newClient =this.clientes.filter(cliente => cliente.id != id)
    this.clientes = newClient  


  },
    cadastrarUsuario: function () {
      if(this.nomeField == ' ' || this.nomeField <3 || this.nomeField == "" ){
        this.deuError =true

      }else{
             this.clientes.push({
        id: Date.now(),
        nome:  this.nomeField,
        email:  this.emailField,
        idade: this.idadeField,
      });
      this.nomeField = "", 
      this.emailField = "",
      this.idadeField = 0
      this.deuError = false

      }
 
    },
  },
  computed:{
    orderClient(){
     return _.orderBy(this.clientes,['nome'],['asc']);
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
#main {
  display: flex;
  text-align: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  border: solid 2px red;
  padding: 50px;
}
.form-cliente {
  width: 50%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}
#deuError{
  color: red;
  font-weight:bolder;
}
</style>
