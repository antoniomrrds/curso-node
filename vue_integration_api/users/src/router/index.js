import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import Edit from '../views/Edit.vue'
import axios from 'axios'

const AdminAuth = async (to, from, next) => {
  const token = localStorage.getItem("token")
  if (token != undefined) {
    const req = {
      headers: {
        Authorization: "Bearer " + token
      }
    }
    try {
      await axios.post("http://localhost:8686/validate",{},req)
      next()
    } catch (err) {
      next("/login");
    }

  } else {
    next("/login");
  }
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }
  ,
  {
    path: '/adm/users',
    name: 'Users',
    component: Users,
    beforeEnter: AdminAuth
  },
  {
    path: '/adm/users/edit/:id',
    name: 'userEdit',
    component: Edit,
    beforeEnter: AdminAuth
  },
  {

    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
