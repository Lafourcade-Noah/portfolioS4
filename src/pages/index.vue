<script setup lang="">
function changeColorBg(color){
            document.bgColor = color;
        }
</script>

<template>
  <div>
    <main>
      <div class="h-screen lg:grid lg:grid-cols-2 gap-4">

        <section class=" ">
          <div>
            <h1 class="caca layer font-black text-5xl lg:text-9xl mt-7"> NOAH <br> LAFOURCADE </h1>
            <div>
              <p class="animationtop layer font-black text-2xl lg:text-5xl title"> UI / UX BRAND DESIGNER </p>
            </div>
          </div>
        </section>

        <div class="flex flex-col justify-center items-center">
          <section>
            <ul class="animationright">
              <li onmouseover="changeColorBg('ff6b6b')" onmouseout="changeColorBg('transparent')" class=" animationright italic text-2xl lg:text-7xl title m-2">
                <RouterLink to="/projets">PROJECTS</RouterLink>
              </li>
              <li class="link animationright italic text-2xl lg:text-7xl title m-2">
                <RouterLink to="/apropos">ABOUT ME</RouterLink>
              </li>
              <li class="animationright italic text-2xl lg:text-7xl title m-2"><RouterLink to="/contact">CONTACT</RouterLink></li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  </div>
</template>