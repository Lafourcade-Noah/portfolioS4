<script setup lang="ts">

</script>

<template>
    <main class="">
        <div class="ligne mt-1 mx-4"></div>
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">

                <div class=" rounded-lg shadow-lg">
                    <img src="../img/Lacanopee_PROJETS.jpg" alt="Placeholder" class=" w-full max-h-52 object-cover">
                </div>
            </div>

            <div class="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 p-4">
                <div class=" rounded-lg shadow-lg">
                    <div class="p-6">
                        <h2 class="text-5xl font-semibold mb-2">LA CANOPEE</h2>
                        <div class=" flex flex-wrap space-x-3">
                            <div class="tag">Photoshop</div>
                            <div class="tag">premiere pro</div>
                        </div>
                        <p class=" font-extralight">This is a description for the card. You can add more details here.
                        </p>
                        <button>
                            <RouterLink to="/projet">Voir tout le projet</RouterLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>