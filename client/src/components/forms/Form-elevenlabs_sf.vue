<script setup>
import { ref, onMounted } from 'vue'
const emit = defineEmits(['submit', 'updateForm'])

const form = ref({
  prompt: {
    default: '',
    value: '',
    required: true,
    validator: (value) => value.trim() !== '',
  },
  duration: {
    default: 2,
    value: 2,
    validator: (value) => value > 0,
  },
  adherance: {
    default: 0.3,
    value: 0.3,
    validator: (value) => value > 0,
  },
})

const submitForm = () => emit('submit', form.value)

onMounted(() => {
  emit('updateForm', form.value)
})
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
          <label class="label" for="duration">Duration (Seconds)</label>
          <div class="control">
            <input
              class="input"
              type="number"
              id="duration"
              name="duration"
              v-model="form.duration.value"
            />
          </div>
        </div>

        <div class="field">
          <label class="label" for="adherance">Prompt Adherance</label>
          <div class="control">
            <input
              class="input"
              type="number"
              id="adherance"
              name="adherance"
              v-model="form.adherance.value"
            />
          </div>
        </div>
      </div>
    </details>
  </form>
</template>
