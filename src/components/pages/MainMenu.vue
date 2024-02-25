<script setup>
import Logo from '@/components/shared/Logo.vue'
import Play from '@/components/shared/Play.vue'
</script>

<template>
  <div class="grid min-h-screen place-items-center px-6">
    <div
      class="w-full max-w-xl rounded-[3rem] bg-gradient-to-b from-[#344ABA] to-[#001479]/80 px-7 pb-16 text-center shadow-[#140E66_0_-8px_0_4px_inset,#2463FF_0_6px_0_8px_inset] md:pb-12"
    >
      <Logo class="mx-auto -mt-12 w-full max-w-64 md:-mt-28 md:max-w-96" />
      <router-link to="/pick-a-category" class="mt-14 inline-block">
        <div
          class="grid h-40 w-40 place-items-center rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-[#243041_0_-4px_0_5px_inset,#9D2DF5_0_-12px_0_11px_inset] hover:brightness-110"
        >
          <Play class="w-14" />
        </div>
      </router-link>
      <router-link
        to="/how-to-play"
        class="mx-auto mt-14 block w-full rounded-[2.5rem] bg-blue py-3 text-center text-[2rem] uppercase leading-none shadow-[#140E66_0_-2px_0_3px_inset,#3C74FF_0_1px_0_6px_inset] hover:bg-[#497DFE] md:max-w-64"
      >
        How to play
      </router-link>
    </div>
  </div>
</template>
