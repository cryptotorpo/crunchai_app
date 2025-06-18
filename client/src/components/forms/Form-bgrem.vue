<script setup>
import { ref, onMounted } from 'vue'
import UploadIcon from '../icons/UploadIcon.vue'

const emit = defineEmits(['submit', 'updateForm'])

const form = ref({
  base_image: {
    default: null,
    value: null,
    required: true,
    validator: (value) => value !== null && value.size > 0,
  },
})

const submitForm = () => emit('submit', form.value)

onMounted(() => {
  emit('updateForm', form.value)
})

/**
 * Form fields
 *
 *  name: base_image
 *  type: file
 *  accept: image/png,image/jpeg
 *  label: Base Image
 *  required: true
 */
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="file has-name is-boxed is-fullwidth">
      <label class="file-label">
        <input
          class="file-input"
          type="file"
          id="base_image"
          name="base_image"
          @change="form.base_image.value = $event.target.files[0]"
          accept="image/png,image/jpeg"
          required
        />
        <span class="file-cta">
          <span class="file-icon">
            <upload-icon />
          </span>
          <span class="file-label has-text-centered">Choose a file…</span>
        </span>
        <span class="file-name has-text-centered">
          {{ form.base_image.value?.name }}
        </span>
      </label>
    </div>
  </form>
</template>
