<script setup>
import { SERVER_URL } from '@/constants'
import SnapshotComp from './ThreeDee/SnapshotComp.vue'
import Waveform from '@/assets/images/waveform.png'

defineProps({
  job: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['click'])

const getFile = (job) => {
  return job.results[0]?.files[0]
}

const assetType = (job) => {
  const file = getFile(job)
  if (!file) return 'unknown'
  const suffix = file.name.split('.').pop()
  switch (suffix) {
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
      return 'image'
    case 'mp4':
    case 'webm':
      return 'video'
    case 'mp3':
    case 'wav':
    case 'ogg':
      return 'audio'
    case 'txt':
      return 'text'
    case 'glb':
      return 'model'
    default:
      return 'unknown'
  }
}
const assetUrl = (job) => {
  return `${SERVER_URL}/file/${getFile(job).id}`
}
</script>

<template>
  <div class="asset-container is-clickable" @click="$emit('click')">
    <img v-if="assetType(job) === 'image'" :src="assetUrl(job)" :alt="job.id" />

    <template v-if="assetType(job) === 'video'">
      <video :src="assetUrl(job)" :alt="job.id" />
      <span class="is-asset-tag">Video</span>
    </template>

    <template v-if="assetType(job) === 'model'">
      <snapshot-comp :url="assetUrl(job)" />
      <span class="is-asset-tag">3d</span>
    </template>

    <template v-if="assetType(job) === 'audio'">
      <img :src="Waveform" :alt="job.id" />
      <span class="is-asset-tag">Audio</span>
    </template>

    <div v-if="assetType(job) === 'unknown'" class="has-text-centered">
      <span class="is-asset-tag">Unknown</span>
    </div>
  </div>
</template>

<style scoped>
.asset-container {
  background-color: #010101;
  position: relative;
  aspect-ratio: 1;
  width: 100%;
  height: 100%;
}
.asset-container > *:not(.is-asset-tag) {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.is-asset-tag {
  position: absolute;
  font-family: 'Square Pixel 7';
  font-size: 1rem;
  bottom: 0.5rem;
  right: 0.5rem;
}
</style>
