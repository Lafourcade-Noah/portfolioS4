<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { ref } from 'vue';

export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<template>
  <main class=" ml-10 mr-10">
    <div class=" mt-10 animleft">
      <h1 class=" font-black text-5xl lg:text-9xl "> LOFI BAR</h1>
      <p class=" opacity-50 ">Motion Design | Novembre 2023 </p>
    </div>
    <div class=" lg:mb-10 lg:mt-10 mb-5 mt-5 animleft ">
      <img src="../img/projets/FCT/image_cover.png" alt="Placeholder"
        class=" shadow-inner m-auto w-3/4 max-h-96 object-cover">
    </div>
    <section>
      <div class="lg:flex animleft">
        <div class="sm:w-1/4 ">
          <!-- Contenu de la première colonne -->
          <h3>OUTILS UTILISES</h3>
          <div class="display flex h-12 gap-2 pt-2 lg:mb-10">
            <img src="../img/photoshop_icon.png" alt="photoshop_icon" class="">
            <img src="../img/after-effects-icon.png" alt="">
          </div>
          <h3>LIENS UTILES</h3>
          <div class="display flex h-12 gap-2 pt-2">
            <a href="https://drive.google.com/drive/folders/1pCdj6dbG2-oUpQTVUkso7i9z5FVFW9Lf?usp=drive_link"
              class="underline-btn absolute">
              <p>Lien Source Projet</p>
            </a>
          </div>
        </div>
        <div class="sm:w-4/5 animright ">
          <!-- Contenu de la deuxième colonne -->
          <div>
            <h2>PRESENTATION</h2>
            <p class="mt-10 font-thin "> Dans ce projet captivant, j'ai été chargé de créer un motion design en parfaite
              synchronisation avec une composition musicale générée par une intelligence artificielle (IA). Le défi
              consistait à développer un concept visuel qui non seulement accompagnait la musique, mais qui s'adaptait
              également à ses nuances, son rythme et ses changements de dynamique.


            </p>
            <p class="mt-10 font-thin">
              J'ai commencé par choisir une plateforme d'IA musicale, puis j'ai créé une
              composition musicale progressive. En parallèle, j'ai exploré l'identité visuelle en lien avec
              le morceau généré, tenant compte du genre musical et de l'esthétique globale, j'ai opté pour un motion
              design au style lofi.
            </p>
            <p class="mt-10 font-thin">

              Dans la phase suivante, j'ai procédé à la conception des éléments graphiques en partant d'une image de
              base représentant des personnages dans un bar. À l'aide de Photoshop, j'ai créé des calques pour définir
              les différents plans de mon animation et j'ai remplacé le fond en utilisant L'IA
              de l'outil. Ensuite, j'ai entamé l'animation de chaque calque, les disposant les uns
              au-dessus des autres pour créer un effet de perspective 3D à l'aide d'After Effects.
            </p>

          </div>
        </div>
      </div>
    </section>
    <video width="800" height="" controls class="m-auto pt-10">
      <source src="../img/311_LAFOURCADE_NOAH_MOTION.mp4" type="video/mp4">
    </video>


    <section>
      <h2 class="text-center mt-10 mb-10">
        GALERIE
      </h2>

      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-1/2">

          <img src="../img/projets/FCT/3dvue.webp" alt="Placeholder"
            class=" shadow-inner mx-auto my-auto w-3/4 max-h-52 object-cover">

        </div>

        <div class="w-full md:w-1/2 ">
          <img src="../img/projets/FCT/imagedebase.webp" alt="Placeholder"
            class=" shadow-inner mx-auto my-auto w-3/4 max-h-52 object-cover">
        </div>

        <div class="w-full md:w-1/2">
          <img src="../img/projets/FCT/basesanspersonage.webp" alt="Placeholder"
            class=" shadow-inner mx-auto my-auto w-3/4 max-h-52 object-cover">
        </div>

        <div class="w-full md:w-1/2 ">
          <img src="../img/projets/FCT/marionette.webp" alt="Placeholder"
            class=" shadow-inner mx-auto my-auto w-3/4 max-h-52 object-cover">
        </div>

        <div class="w-full md:w-1/2">
          <img src="../img/projets/FCT/storyboard.webp" alt="Placeholder"
            class="shadow-inner mx-auto my-auto w-3/4 max-h-52 object-cover">
        </div>
      </div>



    </section>
    <div class="flex m-24">
      <RouterLink to="/kairos" @click.native="scrollToTop()"
        class="relative m-auto inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium border-2 border-white hover:text-white group hover:white">
        <span
          class="absolute left-0 block w-full h-0 transition-all group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span
          class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
            </path>
          </svg>
        </span>
        <span class="relative "> Projet suivant </span>
      </RouterLink>
    </div>
  </main>
</template>