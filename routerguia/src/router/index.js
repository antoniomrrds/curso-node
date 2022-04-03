import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cadastro from '../views/Cadastro.vue'
import RotasFilhas from '../views/RotasFilhas.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
    children:[
      {
        path:'rotaFilha',
        name:'RotasFilhas',
        component:RotasFilhas
    }

    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
