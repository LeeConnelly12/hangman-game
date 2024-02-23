<script setup>
import Layout from '@/components/layouts/Menu.vue'
</script>

<template>
  <Layout>
    <template #title>How to play</template>
    <ul class="mt-20 grid gap-6">
      <li class="rounded-[1.25rem] bg-white p-8">
        <h2 class="text-2xl uppercase leading-none text-dark-navy">
          <span class="text-blue">01</span>
          <span class="ml-4">Choose a category</span>
        </h2>
        <p class="text-purple mt-4">
          First, choose a word category, like animals or movies. The computer
          then randomly selects a secret word from that topic and shows you
          blanks for each letter of the word.
        </p>
      </li>
      <li class="rounded-[1.25rem] bg-white p-8">
        <h2 class="text-2xl uppercase leading-none text-dark-navy">
          <span class="text-blue">02</span>
          <span class="ml-4">Guess letters</span>
        </h2>
        <p class="text-purple mt-4">
          Take turns guessing letters. The computer fills in the relevant blank
          spaces if your guess is correct. If it's wrong, you lose some health,
          which empties after eight incorrect guesses.
        </p>
      </li>
      <li class="rounded-[1.25rem] bg-white p-8">
        <h2 class="text-2xl uppercase leading-none text-dark-navy">
          <span class="text-blue">03</span>
          <span class="ml-4">Win or lose</span>
        </h2>
        <p class="text-purple mt-4">
          You win by guessing all the letters in the word before your health
          runs out. If the health bar empties before you guess the word, you
          lose.
        </p>
      </li>
    </ul>
  </Layout>
</template>
