<template>
  <div>
    <h2 class="has-text-weight-bold">Login</h2>
    <hr />

    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter">
        <div v-if="error != undefined">
          <div class="notification is-danger is-light">
            {{ error }}
          </div>
        </div>

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
        <button class="button is-primary is-fullwidth mt-2" @click="login">
          Logar
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
      email: "",
      password: "",
      error: undefined,
    };
  },
  methods: {
    async login() {
      try {
        const resp = await axios.post("http://localhost:8686/login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token",resp.data.token)
        this.$router.push({name:'Home'});
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