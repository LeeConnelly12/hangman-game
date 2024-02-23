<script setup>
import Layout from '@/components/layouts/Menu.vue'

const categories = [
  'Movies',
  'TV Shows',
  'Countries',
  'Captial Cities',
  'Animals',
  'Sports',
]
</script>

<template>
  <Layout>
    <template #title>Pick a category</template>
    <ul class="mt-24 grid gap-4">
      <li v-for="(category, index) in categories" :key="index">
        <router-link
          :to="{ name: 'game', query: { category } }"
          class="block h-20 w-full rounded-[1.25rem] bg-blue py-6 text-center text-2xl uppercase"
        >
          {{ category }}
        </router-link>
      </li>
    </ul>
  </Layout>
</template>
