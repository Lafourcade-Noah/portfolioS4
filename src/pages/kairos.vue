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
            <h1 class=" animleft font-black text-5xl lg:text-9xl">KAIROS</h1>
            <p class=" animleft opacity-50 "> UI / UX Design | Novembre 2023</p>
        </div>
        <div class="animleft lg:mb-10 lg:mt-10 mb-5 mt-5">
            <img src="../img/projets/kairos/Kairos.webp" alt="Placeholder"
                class=" shadow-inner m-auto w-3/4 max-h-96 object-cover">
        </div>
        <section>
            <div class="lg:flex animleft ">
                <div class="sm:w-1/4 ">
                    <!-- Contenu de la première colonne -->
                    <h3>OUTILS UTILISES</h3>
                    <div class="display flex h-12 gap-2 pt-2 lg:mb-10">
                        <img src="../img/photoshop_icon.png" alt="photoshop_icon" class="">
                        <img src="../img/after-effects-icon.png" alt="">
                    </div>
                    <h3>LIENS UTILES</h3>
                    <div class="display flex h-12 gap-2 pt-2">
                        <a href="https://www.figma.com/proto/2zDO7oe3PsoUYRjoFlNtpd/KAIROS?page-id=49%3A2&type=design&node-id=49-4&viewport=745%2C128%2C0.05&t=CaBF47477rMhz7K1-1&scaling=min-zoom&starting-point-node-id=49%3A1819&mode=design"
                            class="underline-btn absolute">
                            <p>Lien maquette</p>
                        </a>
                    </div>
                </div>
                <div class="sm:w-3/4 ">
                    <!-- Contenu de la deuxième colonne -->
                    <div>
                        <h2>PRESENTATION</h2>
                        <p class="mt-10 font-thin ">
                            Pour ce projet, j'ai dû concevoir une maquette de site web fictif pour des montres
                            personnalisées. J'ai pris en considération le design UI/UX afin de créer une maquette qui
                            soit le plus accessible possible. Une fois achevée, j'ai effectué des tests utilisateurs
                            pour recueillir des retours et améliorer l'expérience utilisateur.
                        </p>
                        <p class="mt-10 font-thin">
                            zefzeffzezefzerfzerf
                        </p>
                        <p class="mt-10 font-thin">
                            Cette approche m'a permis de peaufiner chaque détail de la maquette, en m'assurant qu'elle
                            répondait aux besoins et aux attentes des utilisateurs cibles. Les retours obtenus lors des
                            tests ont été précieux pour identifier les points forts à renforcer et les éventuelles
                            lacunes à corriger.
                        </p>
                        <p class="mt-10 font-thin">
                            En intégrant les principes de l'UI/UX design et en me basant sur les retours des tests
                            utilisateurs, j'ai pu créer une maquette de site web pour les montres personnalisées qui
                            offre une expérience utilisateur optimale, tant en termes de navigation que d'esthétique.
                        </p>
                    </div>
                </div>
            </div>


        </section>
        <section>
            <h2 class="text-center mt-10">
                GALERIE
            </h2>

            <div class="flex flex-wrap justify-between">
                <div class="w-full md:w-1/2">
                    <img src="../img/projets/kairos/maquette.webp" alt="Placeholder"
                        class=" shadow-inner m-auto w-5/6 max-h-52 -cover">
                </div>
                <popup></popup>
                <div class="w-full md:w-1/2">
                    <img src="../img/projets/kairos/pageperso.webp" alt="Placeholder"
                        class=" shadow-inner m-auto w-5/6 max-h-52 object-cover">
                </div>
                <div class="w-full md:w-1/2">
                    <img src="../img/projets/kairos/pagepanier.webp" alt="Placeholder"
                        class=" shadow-inner m-auto w-5/6 max-h-52 object-cover">
                </div>
                <div class="w-full md:w-1/2">
                    <img src="../img/projets/kairos/pageprofil.webp" alt="Placeholder"
                        class=" shadow-inner m-auto w-5/6 max-h-52 object-cover">
                </div>
            </div>
        </section>

        <div class="flex m-24">
            <RouterLink to="/19crac" @click.native="scrollToTop()"
                class="relative m-auto inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium border-2 border-white hover:text-white group hover:white">
                <span
                    class="absolute left-0 block w-full h-0 transition-all group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span
                    class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3">
                        </path>
                    </svg>
                </span>
                <span class="relative "> Projet suivant </span>
            </RouterLink>
        </div>
    </main>
</template>