<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'

import SidebarComp from './components/layout/SidebarComp.vue'
import MobileBarComp from './components/layout/MobileBarComp.vue'
import FooterComp from './components/FooterComp.vue'

const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 640
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 640
  })
})
</script>

<template>
  <sidebar-comp v-if="!isMobile" />
  <main
    class="main-content is-flex-grow-1 is-flex is-flex-direction-column"
    :class="{ 'main-content-desktop': !isMobile }"
  >
    <div class="container px-2 is-fullhd is-relative">
      <router-view />
    </div>
    <footer-comp />
  </main>
  <mobile-bar-comp v-if="isMobile" />
</template>
