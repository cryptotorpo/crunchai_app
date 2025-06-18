<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useApiStore } from '@/stores/api'

import FeedCardComp from '@/components/FeedCardComp.vue'
import ModalComp from '@/components/layout/ModalComp.vue'
import JobViewerComp from '@/components/JobViewerComp.vue'
import AppFormComp from '@/components/forms/AppForm.vue'
import FeedFilterBar from '@/components/FeedFilterBar.vue'
import GlitchText from '@/components/GlitchText.vue'

const api = useApiStore()
const feed = ref([])
const loading = ref(false)
const offset = ref(0)
const limit = 25
const hasMore = ref(true)
const processingIndex = ref(-1)

const feedContainer = ref(null)
const currentJob = ref(null)

const router = useRouter()
const route = useRoute()
const apps = ref([])

const appFilter = ref(route.query.appId || null)
const currentApp = computed(() => {
  return appFilter.value ? apps.value.find((app) => app.id === appFilter.value) : null
})
const jobId = computed(() => route.query?.generationId || null)

const modalApp = ref(null)

const openJob = (job) => {
  currentJob.value = job
  router.push({ query: { generationId: job.id } })
}

const closeJob = () => {
  currentJob.value = null
  router.push({ query: {} })
}

const loadMore = async () => {
  if (loading.value || !hasMore.value) return
  loading.value = true
  try {
    const response = await api.getJobs(offset.value, limit, appFilter.value)
    if (response.length < limit) {
      hasMore.value = false
    }
    feed.value.push(...response)
    offset.value += response.length
  } catch (error) {
    console.error('Failed to load feed:', error)
  } finally {
    loading.value = false
  }
}

const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY
  const cardHeight = feedContainer.value.querySelector('.cell').offsetHeight
  const bottomOfPage = feedContainer.value.offsetHeight - 4 * cardHeight // Increased buffer
  if (scrollPosition >= bottomOfPage) {
    loadMore()
  }
}

const changeAppFilter = (appId) => {
  appFilter.value = appId
  offset.value = 0
  feed.value = []
  hasMore.value = true
  if (appId) {
    router.push({ query: { appId } })
  } else {
    router.push({ query: {} })
  }
  loadMore()
}

const openAppModal = (app) => {
  console.log('openAppModal', app)
  if (app) {
    modalApp.value = app
  } else {
    modalApp.value = currentApp.value
  }
}

onMounted(async () => {
  loadMore()
  if (jobId.value) {
    currentJob.value = await api.getJob(jobId.value)
  }
  apps.value = await api.getApps()
  window.addEventListener('scroll', handleScroll)
  processingIndex.value = 0
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <feed-filter-bar
    :apps="apps"
    :app-filter="appFilter"
    @change-app-filter="changeAppFilter"
    @open-modal="openAppModal"
  />

  <div ref="feedContainer">
    <div class="grid is-col-min-10 is-gap-1 is-unselectable">
      <div v-for="job in feed" :key="job.id" class="cell">
        <FeedCardComp :job="job" @click="openJob(job)" />
      </div>
    </div>

    <div v-if="loading" class="loading has-text-centered my-4 is-square-pixel-7">
      <glitch-text :min-interval="1" :max-interval="3">Loading...</glitch-text>
    </div>

    <div v-if="!hasMore && feed.length > 0" class="has-text-centered my-4 is-square-pixel-7">
      You've reached the beginning of time.
    </div>
  </div>

  <modal-comp v-if="currentJob" :show="true" @close="closeJob()">
    <job-viewer-comp :job="currentJob" />
  </modal-comp>

  <modal-comp v-if="modalApp" :show="true" @close="modalApp = null">
    <app-form-comp :app="modalApp" @close="modalApp = null" />
  </modal-comp>
</template>

<style scoped>
.loading {
  color: var(--bulma-text-grey);
}
</style>
