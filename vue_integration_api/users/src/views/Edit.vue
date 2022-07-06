<template>
  <div>
    <h2 class="has-text-weight-bold">Edição de Usuário</h2>
    <hr />

    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter">
        <div v-if="error != undefined">
          <div class="notification is-danger is-light">
            {{ error }}
          </div>
        </div>
        <label for="name-input" class="has-text-primary has-text-weight-bold"
          >Nome :
        </label>
        <input
          type="text"
          id="name-input"
          name="name"
          class="input is-info my-2"
          placeholder="Nome do usuário "
          v-model="name"
        />

        <label for="email-input" class="has-text-primary has-text-weight-bold"
          >E-mail :
        </label>
        <input
          type="email"
          id="email-input"
          name="email"
          class="input is-info my-2"
          placeholder="E-mail do usuário "
          v-model="email"
        />

        <hr />
        <button class="button is-primary is-fullwidth mt-2" @click="update">
          Editar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import token from "../getToken";
export default {
  created() {
    axios
      .get(`http://localhost:8686/user/${this.$route.params.id}`, token)
      .then((res) => {
        res.data.map((el) => {
          this.name =  el.name;
          this.email = el.email;
          this.id = el.id;
        });
      })
      .catch((err) => {
        console.log(err.response);
        this.$router.push({ name: "Users" });
      });
  },
  data() {
    return {
      name: "",
      email: "",
      id: -1,
      error: undefined,
    };
  },
  methods: {
    async update() {
  
        axios.put("http://localhost:8686/user", {
          name: this.name,
          email: this.email,
          id:this.id
        },token).then(res => {
          console.log(res)
           this.$router.push({ name: "Users" });
        }).catch (error =>{

        const msgError = error.response.data.err;
        this.error = msgError;
        })
    }
  },
};
</script>

<style>
</style>