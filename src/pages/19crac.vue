<!-- eslint-disable vue/multi-word-component-names -->
<script>
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
    <div class=" mt-10">
      <h1 class=" animleft font-black text-5xl lg:text-9xl" data-speed="2">REFONTE 19 CRAC</h1>
      <p class=" animleft opacity-50 ">Branding | Mars 2023</p>
    </div>
    <div class=" lg:mb-10 lg:mt-10 mb-5 mt-5 animleft">
      <img src="../img/projets/crac/crac19mockup.webp" alt="Placeholder"
        class=" shadow-inner m-auto w-3/4 max-h-96 object-cover">
    </div>
    <section>
      <div>
        <h2></h2>
      </div>
      <div class="lg:flex animleft">
        <div class="sm:w-1/4 ">
          <!-- Contenu de la première colonne -->
          <h3>OUTILS UTILISES</h3>
          <div class="display flex h-12 gap-2 pt-2 lg:mb-10">
            <img src="../img/icon/indesign-icon.svg" alt="photoshop_icon" class="">
            <img src="../img/illustrator_icon.png" alt="">
          </div>
          <h3>LIENS UTILES</h3>
          <div class="display flex h-12 gap-2 pt-2">
            <a href="https://drive.google.com/file/d/1xmbO8b-Y28ZCSF1OU-eoTDKkZ3JQVxQk/view?usp=sharing"
              class="underline-btn">
              <p>Lien Charte graphique</p>
            </a>
          </div>
        </div>
        <div class="sm:w-3/4 ">
          <!-- Contenu de la deuxième colonne -->
          <div>
            <h2>PRESENTATION</h2>
            <p class="mt-10 font-thin "> Le "Centre Régional d'Art Contemporain" de Montbéliard s'engage à rendre l'art
              contemporain accessible à tous en proposant un programme diversifié d'expositions, de performances et de
              résidences d'artistes. Son objectif est de dynamiser la scène culturelle locale et de promouvoir les
              échanges créatifs au sein de la communauté, enrichissant ainsi le paysage artistique régional.
            </p>
            <p class="mt-10 font-thin">
              L'objectif de cette refonte était de moderniser et de revitaliser l'image du CRAC 19 afin de mieux
              refléter sa mission et ses valeurs, notamment en mettant en avant la diversité artistique de son
              programme.
            </p>
            <p class="mt-10 font-thin">
              La nouvelle identité visuelle se caractérise par des éléments graphiques distinctifs et polyvalents,
              comprenant un nouveau logo, une palette de couleurs sobre et une typographie moderne, qui reflètent la
              diversité artistique et l'éclectisme des offres culturelles du centre.
            </p>
            <p class="mt-10 font-thin">
             Pour ce projet j'ai du faire une nouvelle proposition de logo, ainsi qu'une charte graphique regroupant toutes les nouvelles modification de ces nouvels modifications.
            </p>
          </div>
        </div>
      </div>


    </section>
    <section>
      <h2 class="text-center mt-10 mb-10">
        GALLERIE
      </h2>

      <div class="flex flex-wrap justify-between py-8">
        <div class="w-full md:w-1/2">
          <img src="../img/projets/crac/crac19mockup.webp" alt="Placeholder"
            class=" shadow-inner m-auto w-full">
        </div>

        <div class="w-full md:w-1/2">
          <img src="../img/projets/crac/chartegraphique.webp" alt="Placeholder"
            class=" shadow-inner m-auto w-full ">
        </div>

        <div class="w-full md:w-1/2">
          <img src="../img/projets/crac/bonnet.webp" alt="Placeholder"
            class=" shadow-inner m-auto w-full object-cover">
        </div>

  
      
      </div>

    </section>
    <div class="flex m-24">
      <RouterLink to="/lacanopee" @click.native="scrollToTop()"
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