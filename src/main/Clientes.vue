<template>
    <main class="about-page">
      <h1>Mesas</h1>
      <div class="container-mesas">
        <button 
          v-for="(item, index) in cajas"
          :key="index"
          class="columnas"> 
          Mesa {{ item }}
        </button>
      </div>
    </main>
  </template>
  
  <script setup>
  import 'devextreme/dist/css/dx.light.css'
  import { ref } from 'vue'
  
  const cajas = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14 ,15, 16, 17,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14 ,15, 16, 17])
  </script>
  
  <style lang="scss" scoped>

  
  .container-mesas {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 0;

    max-height: 80vh; // altura máxima visible
    overflow-y: auto; // scroll vertical solo si hay muchos elementos
    padding-right: 0.5rem; // espacio para que no tape la scrollbar
  }
  .columnas {
    background-color: #f5b041;
    border: none;
    border-radius: 8px;
    padding: 1.5rem;
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    height: 15rem;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease;
  
    &:hover {
      transform: scale(1.05);
    }
  }
  </style>
  