<script setup>
import { ref, computed } from 'vue'
import { useApiStore } from '@/stores/api.js'

import { DataFileList } from '@/types.js'
import { toast } from 'vue3-toastify'

import bgrem from './Form-bgrem.vue'
import elevenlabs_sf from './Form-elevenlabs_sf.vue'
import flux_dev from './Form-flux_dev.vue'
import im23d from './Form-im23d.vue'
import rw_im2vid from './Form-rw-im2vid.vue'

const api = useApiStore()

const emit = defineEmits(['close'])
const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
})
const appId = computed(() => props.app.id)

const loading = ref(false)
const formComponent = computed(() => {
  return {
    bgrem,
    elevenlabs_sf,
    flux_dev,
    im23d,
    'rw-im2vid': rw_im2vid,
  }[appId.value]
})
const form = ref(null)

const submitForm = async () => {
  try {
    if (loading.value) {
      return
    }
    loading.value = true
    if (!validateForm(form)) {
      console.log('invalid form')
      return
    }

    const formData = new FormData()
    formData.append('appId', appId.value)
    formData.append('timeLimit', 300)

    for (const [key, value] of Object.entries(form.value)) {
      // if the value is a FileList, append the files
      if (value.value instanceof FileList || value.value instanceof DataFileList) {
        for (const file of value.value) {
          formData.append('upload', file)
          delete form.value[key]
        }
      } else if (value.value instanceof File) {
        formData.append('upload', value.value)
        delete form.value[key]
      }
    }
    const meta = Object.entries(form.value).reduce((acc, [key, value]) => {
      acc[key] = value.value
      return acc
    }, {})
    formData.append('meta', JSON.stringify(meta))

    if (!(await api.submitJob(formData))) {
      toast.error('Failed to submit job')
      return
    }
    toast.success('Job submitted')

    emit('close')
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

const validateForm = () => {
  return Object.values(form.value).every((value) =>
    value.validator ? value.validator(value.value) : true,
  )
}

const updateForm = (value) => {
  form.value = value
}
</script>

<template>
  <div class="form p-4 is-flex is-flex-direction-column">
    <div class="is-flex-grow-1 is-flex is-flex-direction-column">
      <h2 class="title is-4">{{ props.app.name }}</h2>
      <div class="scroll-container is-flex-grow-1">
        <component :is="formComponent" @updateForm="updateForm" @submit="submitForm" />
      </div>
    </div>

    <div class="field is-flex-shrink-1 is-grouped is-justify-content-flex-end mt-4">
      <div class="control">
        <button
          class="button is-danger is-outlined"
          type="button"
          :disabled="loading"
          @click="$emit('close')"
        >
          Cancel
        </button>
      </div>

      <div class="field has-text-right">
        <div class="control">
          <button
            type="submit"
            class="button is-primary"
            :class="{ 'is-loading': loading }"
            @click="submitForm"
            :disabled="loading"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form {
  height: 100%;
  max-width: 768px;
}

.scroll-container {
  overflow-y: auto;
}
</style>
