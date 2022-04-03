<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <h1 class="pokedex is-size-1">
        Pokedex
      </h1>
      
      <input type="text" class="input is-rouded" placeholder="Buscar Pokemon pelo Nome" v-model="search">
      <button class="button is-fullwidth btnSearch is-success" @click="searchPokemons">
        Buscar
      </button>
     <div v-for="(poke, index) in filterPokemons" :key="poke.url">
        <Pokemon :name="poke.name" :url="poke.url" :num="index + 1" />
      </div>
    </div>
  </div>
</template>

<script>
import Pokemon from "./components/Pokemons.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Pokemon,
  },
  data() {
    return {
      pokemons: [],
      filterPokemons:[],
      search:''
    };
  },
  async created() {
    try {
      const listOfPokemons = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      );
      this.pokemons = listOfPokemons.data.results;
      this.filterPokemons = listOfPokemons.data.results;
      console.log("Pokemons pegos");
    } catch (err) {
      console.log("Ops houve um Erro !!!");
    }
  },
  methods:{
    searchPokemons(){
      const strPokemon =  this.search.toLowerCase()
      this.filterPokemons = this.pokemons
      if( strPokemon == '' || strPokemon == ' '){
        this.filterPokemons = this.pokemons;
      }else{
        this.filterPokemons = this.pokemons.filter(pokemon => pokemon.name == strPokemon)
      }
    }
  }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.pokedex{
  color:orangered;
  font-weight:bolder;
}
.btnSearch{
  margin-top: 10px;
  }
</style>
