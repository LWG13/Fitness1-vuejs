import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import Nav from './navigation.vue'
import './assets/main.css'

const routes = [
  {
    path: "/",
    component: () => import("./components/home.vue"),
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
createApp(Nav).use(router).mount('#app')
