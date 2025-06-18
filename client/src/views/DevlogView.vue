<script setup>
import { ref, onMounted } from 'vue'
import { useApiStore } from '@/stores/api'
import { marked } from 'marked'

import GlitchText from '@/components/GlitchText.vue'

const api = useApiStore()

const devlog = ref(null)

const formattedDate = (date) => {
  return new Date(date * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

onMounted(async () => {
  devlog.value = (await api.getDevlog()).sort((a, b) => b.ts - a.ts)
})
</script>

<template>
  <div class="content">
    <h1 class="is-title is-square-pixel-7 mt-4">Devlog</h1>

    <div class="section" v-for="post in devlog" :key="post.id">
      <div class="container">
        <glitch-text class="mb-4">
          <h2 class="is-title is-square-pixel-7 has-text-info m-0">{{ formattedDate(post.ts) }}</h2>
        </glitch-text>

        <div v-html="marked(post.message)"></div>
      </div>
    </div>
  </div>
</template>
