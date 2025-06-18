<script setup>
import { ref, onMounted } from 'vue'
import UploadIcon from '../icons/UploadIcon.vue'
import RefreshIcon from '../icons/RefreshIcon.vue'

const emit = defineEmits(['submit', 'updateForm'])

const randomSeed = () => Math.floor(Math.random() * 1000000000)

const form = ref({
  base_image: {
    default: null,
    value: null,
    required: true,
    validator: (value) => value !== null && value.size > 0,
  },
  texture_size: {
    default: 512,
    value: 512,
    min: 64,
    max: 2048,
    step: 64,
    validator: (value) => value >= 64 && value <= 2048,
  },
  seed: {
    default: randomSeed(),
    value: randomSeed(),
    validator: (value) => value >= 0,
  },
})

const submitForm = () => emit('submit', form.value)

onMounted(() => {
  emit('updateForm', form.value)
})

/**
 * Form fields
 *
 * name: base_image,
 * type: file,
 * accept: image/png,image/jpeg,
 * label: Base Image,
 * required: true
 *
 * name: texture_size,
 * type: range,
 * label: Texture Size,
 * value: 512,
 * attrs:
 *   min: 64,
 *   max: 2048,
 *   step: 64
 *
 * name: seed,
 * type: number,
 * label: Seed,
 * value: 42
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

    <p class="mb-2 has-text-centered is-size-7">
      <span class="has-text-info">*</span> For optimal results, we recommend using images with
      transparent backgrounds
    </p>

    <details class="mb-3 p-2">
      <summary>Options</summary>

      <div class="mt-2">
        <div class="field">
          <label class="label" for="texture_size">Texture Size</label>
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                {{ form.texture_size.value }}
              </a>
            </p>
            <div class="control is-expanded">
              <input
                class="input"
                type="range"
                id="texture_size"
                name="texture_size"
                :step="form.texture_size.step"
                :min="form.texture_size.min"
                :max="form.texture_size.max"
                v-model="form.texture_size.value"
              />
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label" for="seed">Seed</label>
          <div class="field has-addons">
            <div class="control is-expanded">
              <input class="input" type="number" id="seed" name="seed" v-model="form.seed.value" />
            </div>
            <p class="control">
              <a class="button" @click="form.seed.value = randomSeed()">
                <span class="icon">
                  <refresh-icon />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </details>
  </form>
</template>
