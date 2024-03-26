<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { RouterLink } from 'vue-router';
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}

</script>

<template>
  <main class=" mx-4">
    <div class=" mt-10">
      <h1 class="animleft font-black text-5xl lg:text-9xl">LA CANOPEE</h1>
      <p class=" opacity-50 animleft ">Branding | Mars 2023</p>
    </div>
    <div class=" animleft lg:mb-10 lg:mt-10 mb-5 mt-5 ">
      <img src="../img/projets/canopee/cover.webp" alt="Placeholder"
        class=" shadow-inner m-auto w-3/4 max-h-96 object-cover ">
    </div>
    <section>
      <div>
        <h2></h2>
      </div>
      <div class="lg:flex animleft lg:ml-20 ">
        <div class="sm:w-1/4">
          <!-- Contenu de la première colonne -->
          <h3>OUTILS UTILISES</h3>
          <div class="display flex h-12 gap-2 pt-2 lg:mb-10">
            <img src="../img/icon/figma-icon.svg" alt="figma_icon" class="">
            <img src="../img/illustrator_icon.png" alt="">
          </div>
          <h3>LIENS UTILES</h3>
          <div class="display flex h-12 gap-2 pt-2">
            <a href="https://www.figma.com/file/KtHLeOxvI68Wf9AO04mELL/UE-2.3-R-R209---Noah-Lafourcade?type=design&node-id=0%3A1&mode=design&t=g1vK14F60fQXbJTy-1"
              class="underline-btn absolute">
              <p>Lien Présentation</p>
            </a>
          </div>
        </div>
        <div class="sm:w-3/4">
          <!-- Contenu de la deuxième colonne -->
          <div class="lg:mr-20 lg:pr-28">
            <h2>PRESENTATION</h2>
            <p class="mt-10 font-thin "> L'objectif de ce projet était de concevoir une identité visuelle pour un chalet
              appelé La Canopée, évoquant les thèmes de la nature, du ressourcement, de l'eau et de la forêt, tout en
              reflétant une offre haut de gamme.
            </p>
            <p class="mt-10 font-thin">
              En explorant les différentes pistes pour le logo, j'ai envisagé diverses approches, qu'il s'agisse
              d'utiliser une base d'illustration, de typographie ou une fusion des deux. Le moodboard a également servi
              de guide pour puiser l'inspiration, en s'appuyant sur des marques de prestige pour élaborer des
              propositions qui évoquent le luxe et l'exclusivité.


            </p>
            <p class="mt-10 font-thin">
              JJ'ai retenu l'idée d'un logo combinant typographie et illustration. L'utilisation d'une typographie
              manuscrite a été privilégiée pour son caractère distinctif, évoquant une signature élégante et
              personnalisée. L'intégration de l'illustration d'une canopée/montagne, subtilement liée au "L" du nom, a
              été pensée pour refléter les valeurs de nature, de ressourcement et de tranquillité associées au chalet.
            </p>
            <p class="mt-10 font-thin ">
              Dans un souci de sophistication, le choix s'est porté sur une palette de couleurs restreinte, composée
              uniquement de doré et de noir, renforçant ainsi l'image haut de gamme de la marque La Canopée. Cette
              démarche a abouti à la création d'un logo qui incarne parfaitement l'essence et l'identité recherchées
              pour ce chalet d'exception.</p>
          </div>
        </div>
      </div>


    </section>
    <section>
      <h2 class="text-center mt-10 mb-10">
        GALERIE
      </h2>

      <div class="flex flex-wrap justify-between py-8">
        <div class="w-full md:w-1/2">
          <img src="../img/projets/canopee/cover.webp" alt="Placeholder" class=" shadow-inner m-auto w-3/4">
        </div>
        <div class="w-full md:w-1/2">
          <img src="../img/projets/canopee/CANOPEMOCKUP.webp" alt="Placeholder" class="  shadow-inner m-auto w-3/4">
        </div>
        <div class="w-full md:w-1/2">
          <img src="../img/projets/canopee/mockup-cap.webp" alt="Placeholder" class=" shadow-inner m-auto w-3/4">
        </div>
        <div class="w-full md:w-1/2 ">
          <img src="../img/projets/canopee/mockup-poster.webp" alt="Placeholder" class=" shadow-inner m-auto w-3/4">
        </div>
      </div>
    </section>
    <div class="flex  m-24">
      <RouterLink to="/lofibar" @click.native="scrollToTop()"
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