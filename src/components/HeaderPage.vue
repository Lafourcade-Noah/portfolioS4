<template>
    <header class="animationtop ml-3 mr-3 relative">
      <div class="flex justify-between items-center">
        <RouterLink to="/" @click="refreshPage" class="text-left">Neauha</RouterLink>
        <button @click="toggleMenu" class="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div class="hidden lg:flex items-center space-x-4">
          <a href="/projet">Projet</a>
          <a href="/contact">Contact</a>
          <a href="/a-propos">À propos</a>
        </div>
      </div>
      <div v-if="isMenuOpen" class="lg:hidden relative top-full left-0 right-0 bg-black shadow-lg mt-2 py-2 rounded">
        <RouterLink to="projets" @click="refreshPage"  class="block px-4 py-2 hover:bg-gray-100">Projet</RouterLink>
        <a href="/contact" class="block px-4 py-2 hover:bg-gray-100">Contact</a>
        <a href="/apropos" class="block px-4 py-2 hover:bg-gray-100">À propos</a>
      </div>
      <div class="ligne mt-1"></div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  }

  
  </script>
  
  