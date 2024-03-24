<script>
import { RouterLink } from 'vue-router';
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
    <main class=" mx-3">
        <div v-for="project in projects" :key="project.id">
            <div class="ligne mt-1"></div>
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">

                    <div class="object-cover rounded-lg shadow-lg">
                        <img :src=" project.imageUrl " alt="Placeholder" class="w-full max-h-52 object-cover">
                    </div>
                </div>

                <div class="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 p-4 ">
                    <div class=" rounded-lg shadow-lg">
                        <div class="p-6">
                            <h2 class="text-5xl font-semibold mb-2">{{ project.title }}</h2>
                            <div class=" flex flex-wrap space-x-3">
                                <div class="tag">{{ project.tag1 }}</div>
                                <div class="tag" v-if="project.tag2">{{ project.tag2 }}</div>
                            </div>
                            <p class=" font-extralight">
                                {{ project.description }}
                            </p>
                            <button>
                                <RouterLink :to="project.projetUrl" class="relative inline-flex items-center pr-12 py-1 overflow-hidden text-lg font-medium    hover:text-white group hover:white">
<span class="absolute left-0 block w-full h-0 transition-all group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">Voir tout le projet</span>
                                </RouterLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>