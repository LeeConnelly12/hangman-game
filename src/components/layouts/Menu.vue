<script setup>
import Back from '@/components/shared/Back.vue'
</script>

<template>
  <div class="px-6 pt-8">
    <div class="flex items-center justify-between">
      <a
        href="#!"
        @click="$router.back()"
        class="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF]"
      >
        <Back class="w-4" />
      </a>
      <h1
        class="bg-gradient-to-b from-[#67B6FF] to-white bg-clip-text text-5xl text-transparent"
      >
        <slot name="title" />
      </h1>
    </div>
    <slot />
  </div>
</template>
