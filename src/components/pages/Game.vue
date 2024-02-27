<script setup>
import Layout from '@/components/layouts/Game.vue'
import { useRoute } from 'vue-router'
import { useGameStore } from '@/stores/game'
import data from '@/assets/data.json'
import { ref } from 'vue'

const route = useRoute()
const store = useGameStore()

const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
const category = route.query.category
const categories = data.categories[category]
const word = categories[Math.floor(Math.random() * categories.length)].name

const letters = [...word]
  .filter((letter) => letter !== ' ')
  .map((letter) => letter.toUpperCase())

const guessedLetters = ref([])
const correctLetters = ref([])

function guess(guessedLetter) {
  const isCorrect = letters.find((letter) => letter === guessedLetter)

  if (!isCorrect) {
    store.guessedIncorrectly()
  } else {
    correctLetters.value.push(guessedLetter)
  }

  guessedLetters.value.push(guessedLetter)
}
</script>

<template>
  <Layout>
    <template #category>{{ category }}</template>
    <div
      class="mt-20 grid grid-cols-[repeat(auto-fit,2.5rem)] gap-x-2 gap-y-3 md:mt-28 md:grid-cols-[repeat(auto-fit,5rem)] md:gap-x-3 md:gap-y-4 xl:mx-auto xl:mt-20 xl:max-w-7xl xl:grid-cols-[repeat(auto-fit,7rem)]"
    >
      <div
        v-for="letter in letters"
        type="button"
        class="grid h-16 place-items-center rounded-xl bg-blue text-6xl text-[2.5rem] shadow-[#140E66_0_-2px_0_3px_inset,#3C74FF_0_1px_0_6px_inset] md:h-28 md:rounded-[2rem] xl:h-32 xl:text-[5.5rem]"
        :class="{ 'opacity-25': !guessedLetters.includes(letter) }"
      >
        <template v-if="guessedLetters.includes(letter)">{{ letter }}</template>
      </div>
    </div>
    <div
      class="mt-28 grid grid-cols-[repeat(auto-fit,1.75rem)] gap-x-2 gap-y-6 md:grid-cols-[repeat(auto-fit,4rem)] md:gap-x-4 xl:mx-auto xl:max-w-7xl xl:grid-cols-[repeat(auto-fit,7rem)] xl:gap-x-6"
    >
      <button
        v-for="letter in alphabet"
        type="button"
        class="inline-block h-14 rounded-lg text-2xl text-dark-navy md:h-20 md:rounded-3xl md:text-5xl"
        :class="{
          'bg-blue text-white':
            guessedLetters.includes(letter) && correctLetters.includes(letter),
          'opacity-25':
            guessedLetters.includes(letter) && !correctLetters.includes(letter),
          'bg-white': !correctLetters.includes(letter),
        }"
        :disabled="guessedLetters.includes(letter)"
        @click="guess(letter)"
      >
        {{ letter }}
      </button>
    </div>
  </Layout>
</template>
