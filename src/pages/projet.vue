<script>import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectPage'
});
</script>

<template>
    <div class="project-page">
      <div class="container mx-auto">
        <div class="project-image">
          <img src="https://via.placeholder.com/600x400" alt="Project Image" class="w-full h-auto rounded-lg mb-4 object-cover shadow-inner  ">
        </div>
        <div class="project-details bg-white p-6 rounded-lg shadow-md">
          <h1 class="text-3xl lg:text-5xl font-bold mb-4">Titre du Projet</h1>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h2 class="text-xl font-semibold mb-2">Description</h2>
              <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque orci at risus tincidunt, vitae ultrices metus placerat.</p>
              <h2 class="text-xl font-semibold mb-2">Technologies utilisées</h2>
              <ul class="list-disc list-inside text-gray-700 mb-4">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Vue.js</li>
              </ul>
              <h2 class="text-xl font-semibold mb-2">Lien vers le projet</h2>
              <a href="#" class="text-blue-500 hover:underline">Voir le projet</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  