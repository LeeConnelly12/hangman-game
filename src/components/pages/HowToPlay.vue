<script setup>
import Layout from '@/components/layouts/Menu.vue'

const steps = [
  {
    number: '01',
    title: 'Choose a Category',
    text: `First, choose a word category, like animals or movies. The computer
          then randomly selects a secret word from that topic and shows you
          blanks for each letter of the word.`,
  },
  {
    number: '02',
    title: 'Guess letters',
    text: `Take turns guessing letters. The computer fills in the relevant
          blank spaces if your guess is correct. If it's wrong, you lose some health, which
          empties after eight incorrect guesses.`,
  },
  {
    number: '03',
    title: 'Win or lose',
    text: `You win by guessing all the letters in the word before your health
          runs out. If the health bar empties before you guess the word, you
          lose.`,
  },
]
</script>

<template>
  <Layout>
    <template #title>How to play</template>
    <ul
      class="mx-auto mt-20 grid gap-6 md:mt-24 md:gap-8 xl:mt-16 xl:max-w-7xl xl:grid-cols-[auto_auto_auto]"
    >
      <li
        v-for="step in steps"
        class="grid grid-cols-[auto_1fr] items-center gap-4 rounded-[1.25rem] bg-white p-8 md:grid-rows-2 md:gap-x-10 md:px-10 xl:block xl:max-w-sm xl:py-16 xl:text-center"
      >
        <p
          class="text-2xl text-blue md:row-span-full md:text-7xl xl:col-span-full xl:text-8xl"
        >
          {{ step.number }}
        </p>
        <h2
          class="text-2xl uppercase leading-none text-dark-navy md:text-4xl xl:col-span-full xl:mt-10 xl:text-5xl"
        >
          {{ step.title }}
        </h2>
        <p
          class="col-span-full text-purple md:col-start-2 md:text-xl xl:mt-10 xl:text-2xl"
        >
          {{ step.text }}
        </p>
      </li>
    </ul>
  </Layout>
</template>
