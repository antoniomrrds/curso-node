<template>
  <div>
    <h1 class="mb-6 has-text-primary has-text-weight-bold is-size-1">
      Painel Adm
    </h1>

    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div class="box">
          <table class="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Cargo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ typeRole(index) }}</td>
                <td>
                  <router-link :to="{name:'userEdit',params:{ id:user.id}}">
                    <button class="button is-success mr-2">Editar</button>
                  </router-link>
                  <button
                    class="button is-danger"
                    @click="confirmDeletion(user.id)"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div :class="{ modal: true, 'is-active': showModal }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Deseja deletar este Usuário ?</p>
            <button class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div class="card-content">
            <div class="content">
              <p class="has-text-primary has-text-weight-bold is-size-4">
                Usuário:
                <span class="has-text-danger"> {{ user.name }} </span><br />
                E-mail:
                <span class="has-text-danger"> {{ user.email }} </span>
              </p>
            </div>
          </div>
          <footer class="card-footer">
            <a
              href="#"
              class="card-footer-item has-text-danger"
              @click="hideModal"
              >Cancelar</a
            >
            <a
              href="#"
              class="card-footer-item has-text-primary"
              @click="deleteUser(user.id)"
              >Deletar</a
            >
          </footer>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="hideModal"
      ></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import token from "../getToken";
export default {
  created() {
    this.getUsers(token);
  },
  data() {
    return {
      users: [],
      showModal: false,
      user: "",
    };
  },

  methods: {
    typeRole(index) {
      if (this.users[index].role == 1) {
        return "adm";
      } else if (this.users[index].role == 0) {
        return "Usuário comum";
      }
    },
    hideModal() {
      return (this.showModal = false);
    },
    confirmDeletion(id) {
      this.user = this.searchUser(id);
      this.showModal = true;
    },
    searchUser(id) {
      let result;
      for (const iterator of this.users) {
        if (iterator.id == id) {
          result = iterator;
        }
      }
      return result;
    },
    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:8686/user/${id}`, token);
        this.showModal = false;
        this.getUsers(this.token);
      } catch (error) {
        console.log(error);
        this.showModal = false;
      }
    },
    async getUsers(reqToken) {
      try {
        const result = await axios.get("http://localhost:8686/user", reqToken);
        this.users = result.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>
