import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import Nav from './navigation.vue'

import 'vuetify/styles'; 
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const routes = [
  {
    path: "/",
    component: () => import("./components/home.vue"),
  },
  {
    path: "/contact",
    component: () => import("./components/contact.vue")
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
const vuetify = createVuetify({
  components,
  directives,
});
createApp(Nav).use(vuetify).use(router).mount('#app')
 