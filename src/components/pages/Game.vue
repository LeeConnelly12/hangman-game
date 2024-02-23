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

function guess(guessedLetter) {
  const isCorrect = letters.find((letter) => letter === guessedLetter)

  if (!isCorrect) {
    store.guessedIncorrectly()
    return
  }

  guessedLetters.value.push(guessedLetter)
}
</script>

<template>
  <Layout>
    <template #category>{{ category }}</template>
    <div class="mt-20 grid grid-cols-[repeat(auto-fit,2.5rem)] gap-x-2 gap-y-6">
      <button
        v-for="letter in letters"
        type="button"
        class="h-16 rounded-xl bg-blue"
        :class="{ 'opacity-25': !guessedLetters.includes(letter) }"
      >
        <template v-if="guessedLetters.includes(letter)">{{ letter }}</template>
      </button>
    </div>
    <div
      class="mt-28 grid grid-cols-[repeat(auto-fit,1.75rem)] gap-x-2 gap-y-6"
    >
      <button
        v-for="letter in alphabet"
        type="button"
        class="inline-block h-14 rounded-lg bg-white text-2xl text-dark-navy disabled:opacity-25"
        :disabled="guessedLetters.includes(letter)"
        @click="guess(letter)"
      >
        {{ letter }}
      </button>
    </div>
  </Layout>
</template>
