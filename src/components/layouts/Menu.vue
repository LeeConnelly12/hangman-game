<script setup>
import BackLink from '@/components/shared/BackLink.vue'
</script>

<template>
  <div class="px-6 pb-14 pt-8 md:pb-24 md:pt-14">
    <div class="mx-auto grid grid-cols-[auto_1fr] items-center xl:max-w-7xl">
      <BackLink />
      <h1
        class="bg-gradient-to-b from-[#67B6FF] to-white bg-clip-text text-right text-5xl text-transparent md:text-center md:text-8xl"
      >
        <slot name="title" />
      </h1>
    </div>
    <slot />
  </div>
</template>
