<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { RouterLink } from 'vue-router';


</script>

<template>
  <main class=" mx-4">
    <div class=" mt-10">
      <h1 class="animleft font-black text-5xl lg:text-9xl">LA CANOPEE</h1>
      <p class=" opacity-50 animleft ">Branding | Mars 2023</p>
    </div>
    <div class=" lg:mb-10 lg:mt-10 mb-5 mt-5 animleft ">
      <img src="../img/Lacanopee_PROJETS.jpg" alt="Placeholder" class=" m-auto w-3/4 max-h-52 object-cover a">
    </div>
    <section>
      <div>
        <h2></h2>
      </div>
      <div class="lg:flex animleft ">
        <div class="sm:w-1/4">
          <!-- Contenu de la première colonne -->
          <h3>OUTILS UTILISES</h3>
          <div class="display flex h-12 gap-2 pt-2 lg:mb-10">
            <img src="../img/icon/figma-icon.svg" alt="figma_icon" class="">
            <img src="../img/illustrator_icon.png" alt="">
          </div>
          <h3>LIENS UTILES</h3>
          <div class="display flex h-12 gap-2 pt-2">
            <a href="https://drive.google.com/file/d/1xmbO8b-Y28ZCSF1OU-eoTDKkZ3JQVxQk/view?usp=sharing"
              class="underline-btn absolute">
              <p>Lien Présentation</p>
            </a>
          </div>
        </div>
        <div class="sm:w-3/4">
          <!-- Contenu de la deuxième colonne -->
          <div class="">
            <h2>PRESENTATION</h2>
            <p class="mt-10 font-thin "> Pour ce projet en individuel il m'a fallu proposer un logo d'une compagnie de
              reservation de chalets dans les montagnes
            </p>
            <p class="mt-10 font-thin">
              zefzeffzezefzerfzerf
            </p>
            <p class="mt-10 font-thin">
              J'ai participé à la conception des diagrammes UML afin de mettre en place une structure cohérente pour la
              nouvelle version du site. En se basant sur ces derniers, j'ai pu réaliser des maquettes mobiles et web
              interactives, en tenant compte de toutes les données collectées jusqu'à présent.
            </p>
            <p class="mt-10 font-thin">
              Cette expérience m'a permis de consolider mes compétences en conception et en analyse et en stratégie
              digitale. Ce projet m'a appris à prendre en compte les attentes des utilisateurs dans mes designs, tout en
              respectant une identité graphique et des codes déjà définis.</p>
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
          <img src="../img/projets/canopee/canopee1.png" alt="Placeholder" class=" shadow-inner m-auto w-3/4">
        </div>
        <div class="w-full md:w-1/2">
          <img src="../img/projets/canopee/CANOPEMOCKUP.webp" alt="Placeholder" class="  shadow-inner m-auto w-3/4">
        </div>
        <div class="w-full md:w-1/2">
          <img src="../img/projets/canopee/mockup-cap.webp" alt="Placeholder" class=" shadow-inner m-auto w-3/4">
        </div>
        <div class="w-full md:w-1/2">
          <img src="../img/projets/canopee/mockup-poster.webp" alt="Placeholder" class=" shadow-inner m-auto w-3/4">
        </div>
      </div>
    </section>
 <RouterLink to="/lofibar">PROJET SUIVANT</RouterLink>
</main>
</template>