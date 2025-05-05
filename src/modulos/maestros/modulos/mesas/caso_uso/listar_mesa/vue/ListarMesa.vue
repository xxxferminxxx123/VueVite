<template>
    <main class="about-page">
      <h1>Mesas</h1>
      <input v-model="nombre" placeholder="Escribe tu nombre" />

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

    import { ref, onMounted,watch } from 'vue'
    import { VARIABLE_MESA } from '@/modulos/maestros/modulos/mesas/constant/constant.js'

    const cajas = ref
    (
        {
            lista:[1, 2, 3, 4, 5, 6]
            ,hola: "s"
        }
    );

    const FiltrarMesasDecimales = () => {
        console.log(cajas)
    };

    console.log( VARIABLE_MESA )

  onMounted(() => {
    FiltrarMesasDecimales()
  })

</script>

<style src="@/modulos/maestros/modulos/mesas/caso_uso/listar_mesa/style/estilo.scss"></style>
