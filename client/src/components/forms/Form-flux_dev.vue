<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['submit', 'updateForm'])

const form = ref({
  prompt: {
    default: '',
    value: '',
    required: true,
    validator: (value) => value.length > 0,
  },
  negative_prompt: {
    default: '',
    value: '',
    required: false,
  },
  num_inference_steps: {
    default: 24,
    value: 24,
    min: 1,
    max: 50,
    step: 1,
    required: true,
    validator: (value) => value >= 1 && value <= 50,
  },
  guidance_scale: {
    default: 1,
    value: 1,
    min: 0.5,
    max: 1.5,
    step: 0.1,
    required: true,
    validator: (value) => value >= 0.5 && value <= 1.5,
  },
})

const submitForm = () => emit('submit', form.value)

onMounted(() => {
  emit('updateForm', form.value)
})

/**
 * Form fields
 *
 *  name: prompt
 *  type: textarea
 *  label: Prompt
 *  required: true
 *
 *  name: negative_prompt
 *  type: textarea
 *  label: Negative Prompt
 *
 *  name: num_inference_steps
 *  type: range
 *  label: Inference Steps
 *  attrs:
 *    min: 1
 *    max: 50
 *    step: 1
 *    placeholder: 24
 *
 *  name: guidance_scale
 *  type: range
 *  label: Guidance Scale
 *  attrs:
 *    min: 0.5
 *    max: 1.5
 *    step: 0.1
 *    placeholder: 1
 *
 */
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="field">
      <label class="label" for="prompt">Prompt</label>
      <div class="control">
        <textarea
          class="textarea"
          id="prompt"
          name="prompt"
          v-model="form.prompt.value"
          required
        ></textarea>
      </div>
    </div>

    <details class="mb-3 p-2">
      <summary>Options</summary>

      <div class="mt-2">
        <div class="field">
          <label class="label" for="negative_prompt">Negative Prompt</label>
          <div class="control">
            <textarea
              class="textarea"
              id="negative_prompt"
              name="negative_prompt"
              v-model="form.negative_prompt.value"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <label class="label" for="num_inference_steps">Inference Steps</label>
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                {{ form.num_inference_steps.value }}
              </a>
            </p>
            <div class="control is-expanded">
              <input
                class="input"
                type="range"
                id="num_inference_steps"
                name="num_inference_steps"
                :step="form.num_inference_steps.step"
                :min="form.num_inference_steps.min"
                :max="form.num_inference_steps.max"
                v-model="form.num_inference_steps.value"
              />
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label" for="guidance_scale">Guidance Scale</label>
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                {{ form.guidance_scale.value }}
              </a>
            </p>
            <div class="control is-expanded">
              <input
                class="input"
                type="range"
                id="guidance_scale"
                name="guidance_scale"
                :step="form.guidance_scale.step"
                :min="form.guidance_scale.min"
                :max="form.guidance_scale.max"
                v-model="form.guidance_scale.value"
              />
            </div>
          </div>
        </div>
      </div>
    </details>
  </form>
</template>
