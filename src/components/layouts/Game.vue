<script setup>
import Heart from '@/components/shared/Heart.vue'
import MenuButton from '@/components/shared/MenuButton.vue'
import { useGameStore } from '@/stores/game'
import { ref } from 'vue'

const store = useGameStore()

const isPaused = ref(false)
</script>

<template>
  <div class="px-6 pt-12">
    <div class="grid grid-cols-[auto_auto_1fr_auto_auto] items-center gap-4">
      <MenuButton @click="isPaused = true" />
      <h1 class="text-[2.5rem] leading-none">
        <slot name="category" />
      </h1>
      <div class="col-start-4 h-4 w-14 rounded-full bg-white p-1">
        <div
          class="h-2 rounded-full bg-dark-navy"
          :style="{ width: `${store.health}%` }"
        ></div>
      </div>
      <Heart class="w-6" />
    </div>
    <slot />
  </div>
  <div
    v-if="isPaused"
    class="fixed inset-0 grid min-h-screen w-full place-items-center bg-gradient-to-b from-[#190131]/80 to-[#282B96]/80 px-6"
  >
    <div
      class="w-full rounded-[3rem] bg-gradient-to-b from-[#344ABA] to-[#001479]/80 px-7 pb-16 text-center"
    >
      <h2
        class="-mt-12 bg-gradient-to-b from-[#67B6FF] to-white bg-clip-text text-8xl text-transparent"
      >
        Paused
      </h2>
      <button
        type="button"
        class="mt-11 w-full text-[2rem] uppercase leading-none"
        @click="isPaused = false"
      >
        Continue
      </button>
      <router-link
        to="/pick-a-category"
        class="mt-8 inline-block w-full text-[2rem] uppercase leading-none"
        >New Category</router-link
      >
      <router-link
        to="/"
        class="mt-8 inline-block w-full text-[2rem] uppercase leading-none"
        >Quit game</router-link
      >
    </div>
  </div>
</template>
