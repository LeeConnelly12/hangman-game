import { createApp } from 'vue'
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

createApp(App).use(router).mount('#app')
