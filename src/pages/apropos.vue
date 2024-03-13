<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutPage'
});
</script>

<template>
    <div class="">
        <div class="container mx-auto px-4 py-8">
            <h1 class=" font-black text-5xl lg:text-9xl mt-7">
                A PROPOS
            </h1>

            <div class="flex flex-col lg:flex-row ">
                <div class="lg:w-1/2 lg:pl-4">
                    <p class=" font-extralight mb-4">
                        Bienvenue sur ma page "À propos"! Je suis [Votre Nom], un développeur passionné basé à [Votre
                        Localisation]. Je suis spécialisé dans [Vos Technologies de Prédilection] et j'aime créer des
                        applications Web innovantes.
                    </p>
                </div>
                <div class="lg:w-1/2 mb-4 lg:mb-0  ">
                    <img src="../img/moi_APROPOS.png" alt="Photo de profil"
                        class=" w-full object-cover h-4/6 shadow-xl">
                </div>
            </div>
        </div>
    </div>
</template>