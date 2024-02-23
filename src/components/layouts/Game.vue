<script setup>
import Menu from '@/components/shared/Menu.vue'
</script>

<template>
  <div class="px-6 pt-12">
    <div class="flex items-center">
      <button
        class="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF]"
        type="button"
      >
        <Menu class="w-4" />
      </button>
      <h1 class="ml-4 text-[2.5rem]">
        <slot name="category" />
      </h1>
    </div>
    <slot />
  </div>
</template>
