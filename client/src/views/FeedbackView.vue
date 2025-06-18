<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import { useApiStore } from '@/stores/api'
import UploadIcon from '@/components/icons/UploadIcon.vue'

const api = useApiStore()

const form = ref('form')
const loading = ref(false)
const fileNames = ref([])

const handleFileInput = (event) => {
  const files = event.target.files
  fileNames.value = files.map((file) => file.name)
}

const submit = async () => {
  if (loading.value) {
    return
  }
  try {
    loading.value = true
    const formData = new FormData(form.value)

    // Remove the 'upload' field if no files were selected
    if (!fileNames.value.length) {
      formData.delete('upload')
    }

    await api.submitFeedback(formData)
    toast.success('Thank you for your feedback!')
    form.value.reset()
    fileNames.value = [] // Reset the file names array
  } catch (error) {
    toast.error(`Failed to submit feedback:\n${error.message}.`)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="content">
    <h1 class="is-title is-square-pixel-7 mt-4">Feedback</h1>

    <div class="hero is-medium">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-two-thirds-tablet is-full-mobile">
            <div class="card is-shadowless is-radiusless">
              <div class="card-content">
                <p>
                  We value your feedback! If you encounter any problems or have suggestions
                  regarding the website, please share them with us using the form below.
                </p>

                <form ref="form" @submit.prevent="submit">
                  <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                      <textarea
                        class="textarea"
                        placeholder="Message"
                        name="message"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div class="file has-name is-boxed is-fullwidth mb-2">
                    <label class="file-label">
                      <input
                        class="file-input"
                        type="file"
                        name="upload"
                        multiple
                        @change="handleFileInput"
                      />
                      <span class="file-cta has-text-centered">
                        <span class="file-icon">
                          <upload-icon />
                        </span>
                        <span class="file-label">Choose a file…</span>
                      </span>
                      <div class="file-name">{{ fileNames.join(', ') || 'No files chosen' }}</div>
                    </label>
                  </div>

                  <div class="field">
                    <div class="control">
                      <button
                        class="button is-primary is-fullwidth mt-4"
                        :class="{ 'is-loading': loading }"
                        :disabled="loading"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
