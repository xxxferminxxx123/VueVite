<template>
	<div class="app">
	  <SideBar />
	  <div class="content">
		<router-view />
		<footer class="footer">
		  <p>&copy; 2025 - Antojitos</p>
		</footer>
	  </div>
	</div>
  </template>
  
  <script setup>

  import SideBar from '@/main/components/SideBar.vue'
  
  </script>
  
  <style lang="scss">
  :root {
	  --primary: #4ade80;
	  --primary-alt: #22c55e;
	  --grey: #64748b;
	  --dark: #1e293b;
	  --dark-alt: #334155;
	  --light: #f1f5f9;
	  --sidebar-width: 300px;
  }
  
  * {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  font-family: 'Fira sans', sans-serif;
  }
  
  body {
	  background: var(--light);
  }
  
  button {
	  cursor: pointer;
	  appearance: none;
	  border: none;
	  outline: none;
	  background: none;
  }
  
  .app {
	  display: flex;
  
	  main {
		  flex: 1 1 0;
		  padding: 2rem;
  
		  @media (max-width: 1024px) {
			  padding-left: 6rem;
		  }
	  }
  }
  .about-page {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  
  .content {
	  flex: 1;
	  display: flex;
	  flex-direction: column;
	  min-height: 100vh;
  }
  
  .footer {
	  margin-top: auto;
	  text-align: center;
	  padding: 1rem;
	  background-color: var(--dark);
	  color: white;
	  font-size: 0.9rem;
  }
  </style>
  