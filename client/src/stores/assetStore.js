import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAssetStore = defineStore('asset', () => {
  // store to throttle asset loading

  const maxAssets = 5

  const queue = ref([])

  const activeQueue = computed(() => queue.value.slice(0, maxAssets))

  const isActive = (id) => activeQueue.value.includes(id)

  const add = (id) => {
    queue.value.push(id)
  }

  const remove = (id) => {
    queue.value = queue.value.filter((i) => i !== id)
  }

  return { activeQueue, add, remove, isActive }
})
