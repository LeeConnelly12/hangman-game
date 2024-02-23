<script setup>
import Logo from '@/components/shared/Logo.vue'
import Play from '@/components/shared/Play.vue'
</script>

<template>
  <div class="grid min-h-screen place-items-center px-6">
    <div
      class="w-full rounded-[3rem] bg-gradient-to-b from-[#344ABA] to-[#001479]/80 px-7 pb-16 text-center"
    >
      <Logo class="-mt-12 inline-block w-full max-w-64" />
      <router-link to="/pick-a-category" class="mt-14 inline-block">
        <div
          class="grid h-40 w-40 place-items-center rounded-full bg-[#FE71FE]"
        >
          <Play class="w-14" />
        </div>
      </router-link>
      <router-link
        to="/how-to-play"
        class="mt-14 inline-block w-full rounded-[2.5rem] bg-blue py-2 text-center text-[2rem] uppercase"
      >
        How to play
      </router-link>
    </div>
  </div>
</template>
