<template>
  <div>
    <h2 class="has-text-weight-bold">Registro de usuário</h2>
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
        <label
          for="password-input"
          class="has-text-primary has-text-weight-bold"
          >Senha :
        </label>
        <input
          type="password"
          id="password-input"
          name="name"
          class="input is-info my-2"
          placeholder="*****"
          v-model="password"
        />
        <hr />
        <button class="button is-primary is-fullwidth mt-2" @click="register">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: undefined,
    };
  },
  methods: {
    async register() {
      try {
        const result = await axios.post("http://localhost:8686/user", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$router.push({name:'Home'});
        console.log(result);
      } catch (error) {
        const msgError = error.response.data.err;
        this.error = msgError;
      }
    },
  },
};
</script>

<style>
</style>