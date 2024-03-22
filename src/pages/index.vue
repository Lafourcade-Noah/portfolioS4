<script>
       
</script>

<template>
  <div>
    <main>
      <div class=" h-screen lg:grid lg:grid-cols-2 gap-4">

        <section class=" ml-3">
          <div>
            <h1 class="caca font-black text-5xl xl:text-8xl lg:text-8xl mt-7"> NOAH <br> LAFOURCADE </h1>
            <div>
              <p class="caca  font-black text-2xl lg:text-5xl title">BRAND DESIGN </p>
              <p class=" text-end animationright  font-black text-2xl lg:text-5xl title"> MOTION DESIGN</p>
              <p class=" ml-10 caca font-black text-2xl lg:text-5xl title"> UI / UX DESIGN </p>
            </div>
          </div>
        </section>

        <div data-speed="2" class=" layer mt-10 flex flex-col justify-center items-center">
          <section>
            <ul class="animationright">
              <li onmouseover="changeColorBg('ff6b6b')" onmouseout="changeColorBg('transparent')" class=" animationright italic text-4xl lg:text-7xl title m-2">
                <a @click="refreshPage" href="/projets">PROJECTS</a>
              </li>
              <li class="link animationright italic text-4xl lg:text-7xl title m-2">
                <a href="/apropos">ABOUT ME</a>
              </li>
              <li class="animationright italic text-4xl lg:text-7xl title m-2"><RouterLink to="/contact" @click="refreshPage">CONTACT</RouterLink></li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  </div>
</template>