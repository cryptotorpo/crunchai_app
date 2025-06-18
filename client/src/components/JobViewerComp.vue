<script setup>
import { ref, computed } from 'vue'
import { SERVER_URL } from '@/constants'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { shortAddress, shareableAssetTypes, contentTypeFromName } from '@/utils'

import ViewerComp from './ThreeDee/ViewerComp.vue'
import DownloadIcon from './icons/DownloadIcon.vue'
import ShareIcon from './icons/ShareIcon.vue'
import ContentDuplicateIcon from './icons/ContentDuplicateIcon.vue'
import InformationOutlineIcon from './icons/InformationOutlineIcon.vue'
import InformationOutlineOffIcon from './icons/InformationOutlineOffIcon.vue'
import LogoXIcon from './icons/social/LogoXIcon.vue'
import LogoTelegramIcon from './icons/social/LogoTelegramIcon.vue'

const userStore = useUserStore()
const { isLoggedIn } = storeToRefs(userStore)

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
})

const showDetails = ref(true)
const showShareMenu = ref(false)

const hasPrompt = computed(() => 'prompt' in props.job.meta)
const hasInputFile = computed(() => 'files' in props.job && props.job.files.length > 0)
const hasResultFile = computed(() => 'results' in props.job && props.job.results.length > 0)

const resultFile = computed(() => {
  if (!hasResultFile.value) return null
  return getResultFile(props.job)
})

const inputFile = computed(() => {
  if (!hasInputFile.value) return null
  return getInputFile(props.job)
})

const shareData = computed(() => {
  return {
    title: `Check out this amazing ${resultAssetType(props.job)} created with InfraW! 🚀\n`,
    url: `${window.location.origin}/feed?generationId=${props.job.id}`,
  }
})

const getResultFile = (job) => job.results[0]?.files[0]

const getInputFile = (job) => job.files[0]

const resultAssetType = (job) => {
  const file = resultFile.value
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
const assetUrl = (file) => {
  return `${SERVER_URL}/file/${file.id}`
}

const shareJob = async (job) => {
  const newShareData = { ...shareData.value }
  if (resultFile.value && shareableAssetTypes.includes(resultFile.value.name.split('.').pop())) {
    const file = new File(
      [await fetch(assetUrl(resultFile.value)).then((res) => res.blob())],
      resultFile.value.name,
      {
        type: contentTypeFromName(resultFile.value.name),
      },
    )
    newShareData.files = [file]
  }
  if (navigator.canShare) {
    if (navigator.canShare(newShareData)) {
      return await navigator.share(newShareData).catch(() => {})
    } else {
      delete newShareData.files
      return await navigator.share(newShareData).catch(() => {})
    }
  }
  showShareMenu.value = true
}

const shareJobAlt = async (source, job) => {
  console.log('shareJobAlt', source, job)
  switch (source) {
    case 'twitter': {
      const params = new URLSearchParams({
        url: shareData.value.url,
        text: shareData.value.title,
      })
      window.open(`https://x.com/intent/tweet?${params.toString()}`, '_blank')
      break
    }
    case 'telegram': {
      const params = new URLSearchParams({
        url: shareData.value.url,
        text: shareData.value.title,
      })
      window.open(`https://t.me/share/url?${params.toString()}`, '_blank')
      break
    }
  }
  showShareMenu.value = false
}

const duplicateJob = async (job) => {
  console.log('duplicateJob', job)
}
</script>

<template>
  <div class="asset-content has-text-centered is-clipped">
    <img
      v-if="resultAssetType(job) === 'image'"
      :src="assetUrl(getResultFile(job))"
      :alt="job.id"
    />

    <video
      v-if="resultAssetType(job) === 'video'"
      :src="assetUrl(getResultFile(job))"
      :alt="job.id"
      controls
    />

    <div v-if="resultAssetType(job) === 'model'" class="asset-model">
      <viewer-comp :url="assetUrl(getResultFile(job))" :alt="job.id" orbit-controls />
    </div>

    <div
      v-if="resultAssetType(job) === 'audio'"
      class="asset-audio is-flex is-justify-content-center is-align-items-center"
    >
      <audio :src="assetUrl(getResultFile(job))" :alt="job.id" controls />
    </div>

    <div v-if="resultAssetType(job) === 'unknown'" class="has-text-centered"></div>
  </div>

  <div
    class="asset-details p-2 pb-6 is-flex is-flex-direction-column is-justify-content-flex-end"
    :class="{ 'is-active': showDetails && (hasPrompt || hasInputFile) }"
  >
    <dl class="content">
      <template v-if="hasPrompt">
        <dt class="has-text-weight-bold is-uppercase has-text-grey-light is-size-7">Prompt</dt>
        <dd class="mb-4">{{ job.meta.prompt || '-' }}</dd>
      </template>

      <template v-if="hasInputFile">
        <dt class="has-text-weight-bold is-uppercase has-text-grey-light is-size-7">Input</dt>
        <dd class="mb-4">
          <img :src="assetUrl(inputFile)" :alt="inputFile.name" />
        </dd>
      </template>

      <span class="mb-4 is-size-7">
        <span class="has-text-weight-bold is-uppercase has-text-grey-light mr-2">Generated by</span>
        <span class="is-family-monospace">{{ shortAddress(job.owner_id) }}</span>
      </span>
    </dl>
  </div>

  <div class="asset-actions mb-2 buttons is-flex is-justify-content-space-around">
    <a v-if="hasPrompt || hasInputFile" class="button is-ghost" @click="showDetails = !showDetails">
      <span class="icon">
        <information-outline-icon v-if="!showDetails" />
        <information-outline-off-icon v-else />
      </span>
    </a>

    <a class="button is-ghost" :href="assetUrl(resultFile)">
      <span class="icon">
        <download-icon />
      </span>
    </a>

    <div class="dropdown is-up" :class="{ 'is-active': showShareMenu }">
      <div class="dropdown-trigger">
        <a
          class="button is-ghost"
          aria-haspopup="true"
          aria-controls="share-menu"
          @click="shareJob(job)"
        >
          <span class="icon">
            <share-icon />
          </span>
        </a>
      </div>
      <div id="share-menu" class="dropdown-menu" role="menu">
        <div class="box is-shadowless p-2 m-2 is-flex is-justify-content-space-around">
          <a class="button is-ghost is-medium" @click="shareJobAlt('x', job)">
            <span class="icon">
              <logo-x-icon />
            </span>
          </a>
          <a class="button is-ghost is-medium" @click="shareJobAlt('telegram', job)">
            <span class="icon">
              <logo-telegram-icon />
            </span>
          </a>
        </div>
      </div>
    </div>

    <a v-if="isLoggedIn" class="button is-ghost" @click="duplicateJob(job)">
      <span class="icon">
        <content-duplicate-icon />
      </span>
    </a>
  </div>
</template>

<style scoped>
.asset-content,
.asset-model {
  width: 100%;
  height: 100%;
}

.asset-model,
.asset-audio {
  aspect-ratio: 1 / 1;
}

.asset-content img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.asset-details {
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.8)
  );
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
  opacity: 0;
}

.asset-details.is-active {
  opacity: 1;
}

.asset-details img {
  max-width: 15%;
  max-height: 15%;
  object-fit: contain;
}

.asset-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
  pointer-events: auto;
}
</style>
