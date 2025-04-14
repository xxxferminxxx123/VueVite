<template>
    <div class="layout">
      <aside class="sidebar">
        <div class="logo">Mystery Code</div>
        <dx-list
          :items="menuItems"
          displayExpr="text"
          :hoverStateEnabled="true"
          :activeStateEnabled="true"
          :selectionMode="'single'"
          class="custom-list"
        >
          <template #item="{ data }">
            <div class="list-item" @click="onMenuItemClick(data)">
              <div>{{ data.text }}</div>
              <ul v-if="data.subItems && data.expanded" class="sub-list">
                <li
                  v-for="sub in data.subItems"
                  :key="sub.text"
                  @click.stop="navigate(sub.route)"
                >
                  {{ sub.text }}
                </li>
              </ul>
            </div>
          </template>
        </dx-list>
      </aside>
  
      <main class="content">
        <router-view />
      </main>
    </div>
  </template>
  
  <script setup>
  import 'devextreme/dist/css/dx.light.css'
  import DxList from 'devextreme-vue/list'
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  
  const router = useRouter()
  
  const menuItems = ref([
    { text: 'Contador', route: '/seguridad/contador' },
    {
      text: 'Administración',
      expanded: false,
      subItems: [
        { text: 'Usuarios', route: '/usuarios' },
        { text: 'Roles', route: '/roles' }
      ]
    },
    {
      text: 'Reportes',
      expanded: false,
      subItems: [
        { text: 'Diario', route: '/reportes/diario' },
        { text: 'Mensual', route: '/reportes/mensual' }
      ]
    }
  ])
  
  const onMenuItemClick = (item) => {
    if (item.subItems) {
      // Cierra los otros submenús
      menuItems.value.forEach(menu => {
        if (menu.subItems && menu !== item) {
          menu.expanded = false
        }
      })
  
      // Toggle del actual
      item.expanded = !item.expanded
    } else if (item.route) {
      router.push(item.route)
    }
  }
  
  const navigate = (route) => {
    router.push(route)
  }
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    height: 100vh;
  }
  .sidebar {
    width: 240px;
    background-color: #093c64;
    color: white;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
  }
  .logo {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #ffffff;
  }
  .custom-list >>> .dx-list-item-content {
    color: #ffffff;
    font-weight: 500;
  }
  .list-item {
    padding: 5px 0;
    cursor: pointer;
  }
  .sub-list {
    margin-left: 10px;
    list-style: none;
    padding-left: 10px;
  }
  .sub-list li {
    color: #cce2ff;
    cursor: pointer;
    padding: 4px 0;
  }
  .sub-list li:hover {
    color: #ffffff;
    font-weight: bold;
  }
  .content {
    flex: 1;
    padding: 20px;
    background-color: #f8f9fa;
  }
  </style>
  