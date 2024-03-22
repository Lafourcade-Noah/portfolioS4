<script>
import { projects } from '../project.js';

export default {
    data() {
        return {
            projects: projects
        };
    }
};
</script>

<template>
    <main class="">
        <div v-for="project in projects" :key="project.id">
            <div class="ligne mt-1 mx-4"></div>
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">

                    <div class=" rounded-lg shadow-lg">
                        <img :src=" project.imageUrl " alt="Placeholder" class="w-full max-h-52 object-cover">
                    </div>
                </div>

                <div class="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 p-4">
                    <div class=" rounded-lg shadow-lg">
                        <div class="p-6">
                            <h2 class="text-5xl font-semibold mb-2">{{ project.title }}</h2>
                            <div class=" flex flex-wrap space-x-3">
                                <div class="tag">{{ project.tag1 }}</div>
                                <div class="tag">{{ project.tag2 }}</div>
                            </div>
                            <p class=" font-extralight">
                                {{ project.description }}
                            </p>
                            <button>
                                <a :href="project.projetUrl">Voir tout le projet</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>