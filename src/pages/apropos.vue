// eslint-disable-next-line vue/multi-word-component-names
<script>

</script>

<template>
  <div class="">
    <div class="container mx-auto px-4 py-8 ">
      <h1 class="animleft font-black text-5xl lg:text-6xl mt-3">
        A PROPOS DE MOI
      </h1>

      <div class="mt-3">
        Je m'appelle Noah Lafourcade, j'ai 19 ans et je suis étudiant en Bachelor Universitaire de Technologie
        (B.U.T) dans les Métiers du Multimédia et d'Internet (M.M.I). Passionné par les nouvelles Technologies je
        souhaite me spécialiser dans la création numérique. Je suis quelqu’un de curieux et
        passionné qui aime travailler en équipe.
      </div>
      <div class="items-center display flex">
        <div class=" gap-2 pt-2 m-auto text-center">
          <h3 class="mb-4">COMPÉTENCES</h3>
          <div class="flex gap-2 h-12 mb-4">
            <img src="../img/icon/photoshop-icon.svg" alt="Icone After Effects">
            <img src="../img/illustrator_icon.png" alt="Icone Illustrator">
            <img src="../img/indesign_icon.png" alt="Icone InDesign">
            <img src="../img/photoshop_icon.png" alt="Icone Photoshop">
            <img src="../img/premiere_icon.png" alt="Icone Premiere Pro">
            <img src="../img/figma_icone.webp" alt="Icone Figma">
          </div>
          <h3 class="mb-4"> INTÉRESSÉ ? </h3>

          <a href="../img/CV_noahlafourcade.pdf" download="CV_noahlafourcade.pdf"
            class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium  border-2 border-white  hover:text-white group hover:white">
            <span class="absolute left-0 block w-full h-0 transition-all group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </span>
            <span class="relative">Téléchargez mon CV</span>
          </a>
          
        </div>
    
        



      </div>
    </div>
  </div>
</template>