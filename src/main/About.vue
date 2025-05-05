<template>
    <main class="about-page">
    <div class="container-mesas-main">
        <h1>Mesas</h1>
        <div class="fila">

        <div 
        v-for="(item, index) in cajas"
        :key="index"
        class="container-mesas"
        >
        Mesa {{ item }}
        </div>
    </div>
</div>
</main>
</template>

<script setup>
import 'devextreme/dist/css/dx.light.css'
import { ref } from 'vue'
const cajas = ref([1, 2, 3, 4, 5, 6]) // pueden ser objetos si luego necesitas más datos


</script>


<style lang="scss" scoped>
.container-mesas{
  background-color: bisque;
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 0.5rem;
  
}
.fila {
  display: flex;
  flex-direction: row;  // cada caja en una fila
  align-items: center;     // centrar horizontalmente
  gap: 1rem;               // espacio entre las filas
  margin-top: 2rem;
}
.container-mesas-main{
    padding-left:2rem ;
}


  </style>
  
