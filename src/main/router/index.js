import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import About from '../About.vue'
import Table from '../Table.vue'
import Clientes from '../Clientes.vue'
import ListarMesa from '@/modulos/maestros/modulos/mesas/caso_uso/listar_mesa/vue/ListarMesa.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component:  About
    },
    {
        path: '/cliente',
        component:  Clientes
    }
    ,
    {
        path: '/mesa',
        component:  ListarMesa
    }
    
]

const router = createRouter({   
  history: createWebHistory(),
  routes
})

export default router