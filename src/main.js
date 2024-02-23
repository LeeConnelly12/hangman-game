import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import routes from './routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `Hangman - ${to.meta.title}`
  next()
})

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
