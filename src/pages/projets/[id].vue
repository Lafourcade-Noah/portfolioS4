<script setup lang="ts">
import { getProjet } from '@/backend'; // Supposons que vous avez une fonction pour récupérer les détails du projet depuis votre backend
import { defineProps } from 'vue';

const props = defineProps<{
  id: string
}>();

const projet = await getProjet(props.id);
</script>

<template>
  <div>
    <h2>{{ projet.TITRE }}</h2>
    <p>{{ projet.description }}</p>
    <!-- Autres détails du projet à afficher -->
  </div>
```