<template>
  <div class="pokemons">  
      <div class="card">
        <div class="card-image">
          <figure >
            <img
              :src="currentImg"
              alt="Imagens de pokemons"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left"></div>
            <div class="media-content">
              <p class="title is-4">

                {{ num }} - {{ upper }}
              </p>
              <p class="subtitle is-6">{{pokemons.type}}</p>
            </div>
          </div>

          <div class="content">
            <button class="button is-medium is-fullwidth" @click="mudarSprite">
              Mudar Sprite
            </button>
          </div>
        </div>
      </div>
    </div>
  
</template>

<script>
import axios from "axios";
export default {
  async created() {
    try {
      const pokemonCharacteristics = await axios.get(this.url);
      this.pokemons.type = pokemonCharacteristics.data.types[0].type.name;
      this.pokemons.front = pokemonCharacteristics.data.sprites.front_default;
      this.pokemons.back = pokemonCharacteristics.data.sprites.back_default;
      this.currentImg = this.pokemons.front
    } catch (error) {
      console.log("Houve um erro !!!");
    }
  },
  data() {
    return {
      isFront:true,
      currentImg:'',
      pokemons: {
        type:'',
        front:'',
        back:''
      },
    };
  },
  props: {
    name: String,
    url: String,
    num: Number,
  },
  methods:{
    mudarSprite(){
      if(this.isFront){
        this.isFront = false;
        this.currentImg = this.pokemons.back;
      }else{
        this.isFront = true;
        this.currentImg = this.pokemons.front;
      }
    }
  },
  computed: {
    upper() {
      let newString = this.name[0].toUpperCase() + this.name.slice(1);
      return newString;
    },
  },
};
</script>

<style>
.pokemons{
  margin-top: 2%;
}
</style>