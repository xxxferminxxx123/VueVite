import { createApp } from 'vue'
import App from './App.vue'
import router from './rutas' // ← importa tu router

createApp(App)
  .use(router)
  .mount('#app')
