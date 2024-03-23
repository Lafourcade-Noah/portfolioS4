<!-- eslint-disable vue/multi-word-component-names -->
<script>

</script>

<template>
  <div>
    <main>
      <div class=" h-screen lg:grid lg:grid-cols-2 gap-4">

        <section class=" ml-3">
          <div>
            <h1 class=" animationleft font-black text-5xl xl:text-8xl lg:text-8xl mt-7"> NOAH <br> LAFOURCADE </h1>
            <div>
              <p class="  font-black text-2xl lg:text-5xl title">BRAND DESIGN </p>
              <p class=" text-end   font-black text-2xl lg:text-5xl title"> MOTION DESIGN</p>
              <p class=" ml-10  font-black text-2xl lg:text-5xl title"> UI / UX DESIGN </p>
            </div>
          </div>
        </section>

        <div data-speed="2" class=" layer mt-10 flex flex-col justify-center items-center">
          <section>
            <ul class="">
              <li class="  italic text-4xl lg:text-7xl title m-2">
                <RouterLink to="/projets">PROJECTS</RouterLink>
              </li>
              <li class="link  italic text-4xl lg:text-7xl title m-2">
                <RouterLink to="/apropos">ABOUT ME</RouterLink>
              </li>
              <li class=" italic text-4xl lg:text-7xl title m-2">
                <RouterLink to="/contact">CONTACT</RouterLink>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>