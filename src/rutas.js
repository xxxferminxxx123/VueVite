
import { createRouter, createWebHistory } from 'vue-router'
import seguridadRoutes from '@/Persona/ruta.js'

const routes = [
  ...seguridadRoutes,
  {
    path: '/',
    redirect: '/seguridad/contador'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
