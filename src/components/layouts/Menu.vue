<script setup>
import BackLink from '@/components/shared/BackLink.vue'
</script>

<template>
  <div class="px-6 pt-8">
    <div class="flex items-center justify-between">
      <BackLink />
      <h1
        class="bg-gradient-to-b from-[#67B6FF] to-white bg-clip-text text-5xl text-transparent"
      >
        <slot name="title" />
      </h1>
    </div>
    <slot />
  </div>
</template>
