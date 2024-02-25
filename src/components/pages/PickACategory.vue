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
    <ul
      class="mt-24 grid gap-4 md:mt-28 md:grid-cols-2 md:gap-8 xl:mx-auto xl:mt-40 xl:max-w-7xl xl:grid-cols-3 xl:gap-y-12"
    >
      <li v-for="(category, index) in categories" :key="index">
        <router-link
          :to="{ name: 'game', query: { category } }"
          class="block h-20 w-full rounded-[1.25rem] bg-blue py-6 text-center text-2xl uppercase shadow-[#140E66_0_-2px_0_3px_inset,#3C74FF_0_1px_0_6px_inset] hover:bg-[#497DFE] md:h-auto md:py-16 md:text-5xl"
        >
          {{ category }}
        </router-link>
      </li>
    </ul>
  </Layout>
</template>
