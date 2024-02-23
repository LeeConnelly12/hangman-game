<script setup>
import Layout from '@/components/layouts/Game.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const category = route.query.category
</script>

<template>
  <Layout>
    <template #category>{{ category }}</template>
    <div>game</div>
  </Layout>
</template>
