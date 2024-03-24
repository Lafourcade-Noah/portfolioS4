<template>
  <div class="ligne mx-3"></div>
  <footer class="p-8">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

      <!-- Colonne 2 -->
      <div class="text-center">
        <h2 class="text-lg font-semibold mb-4">Liens utiles</h2>
        <ul class="text-sm">
          <li><RouterLink to="/" class="underline-btn">Accueil</RouterLink></li>
          <li><RouterLink to="/apropos" class="underline-btn">A propos</RouterLink></li>
          <li><RouterLink to="/contact" class="underline-btn">Contact</RouterLink></li>
        </ul>
      </div>
      <!-- Colonne 3 -->
      <div class=" text-center">
        <h2 class="text-lg font-semibold mb-4">Mes réseaux sociaux</h2>
        <p class="text-sm ">
          LinkedIn <br>
          Behance</p>
      </div>
    </div>
    <div class="mt-8 text-center">
      <p class="text-sm">&copy; Noah Lafourcade - Portfolio</p>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  // Ajoutez vos données ou méthodes ici si nécessaire
}
</script>

<style scoped>
/* Ajoutez vos styles Tailwind CSS personnalisés ici si nécessaire */
</style>
