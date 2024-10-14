import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import TodoView from '@/views/TodoView.vue'

const routes = [
  { path: '/', component: WelcomeView },
  { path: '/todo-app', component: TodoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
