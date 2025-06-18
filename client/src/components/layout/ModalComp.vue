<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <div class="modal" :class="{ 'is-active': props.show }">
    <div class="modal-background" @click="emit('close')"></div>
    <div class="modal-content m-0 p-0 has-background-black">
      <slot />
    </div>
    <button class="modal-close is-large" aria-label="close" @click="emit('close')"></button>
  </div>
</template>

<style scoped>
.modal {
  z-index: 1001;
}

.modal-content {
  width: fit-content;
  height: fit-content;
  max-width: 1024px;
  max-height: 1024px;
  min-width: 640px;
  position: relative;
}

.modal-background {
  background-color: rgba(0, 0, 0, 0.9);
}

@media (max-width: 639px) {
  .modal-card {
    aspect-ratio: 1 / 1;
  }
  .modal-content {
    min-width: 100%;
    min-height: 100%;
  }
}
</style>
