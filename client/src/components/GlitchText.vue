<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  stacks: {
    type: Number,
    default: 3,
  },
  text: {
    type: String,
    default: null,
  },
  minInterval: {
    type: Number,
    default: 10,
  },
  maxInterval: {
    type: Number,
    default: 30,
  },
})
const glitchTimeout = ref(null)
const isGlitching = ref(false)

const randomInterval = () =>
  (Math.random() * (props.maxInterval - props.minInterval) + props.minInterval) * 1000

const startGlitch = () => {
  isGlitching.value = true
  glitchTimeout.value = setTimeout(stopGlitch, 1200)
}

const stopGlitch = () => {
  isGlitching.value = false
  clearTimeout(glitchTimeout.value)
  setTimeout(startGlitch, randomInterval())
}

onMounted(() => {
  glitchTimeout.value = setTimeout(startGlitch, randomInterval())
})

onBeforeUnmount(() => {
  clearTimeout(glitchTimeout.value)
})
</script>

<template>
  <div
    class="stack is-clipped"
    :style="{
      '--stacks': stacks,
      '--glitch-active': isGlitching ? 1 : 0,
    }"
  >
    <span v-for="i in stacks" :key="i" :style="{ '--index': i }" :name="`text-${i}`">
      <slot>
        <span>{{ props.text }}</span>
      </slot>
    </span>
  </div>
</template>

<style scoped>
/* Thank you [Aldriê](https://codepen.io/aldrie) */
.stack {
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}

.stack span {
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  --stack-height: calc(100% / var(--stacks) - 1px);
  --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
  --clip-top: calc(var(--stack-height) * var(--index));
  --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
  clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
  animation:
    stack 250ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards calc(var(--index) * 120ms),
    glitch calc(1200ms * var(--glitch-active)) ease infinite;
}

.stack span:nth-child(odd) {
  --glitch-translate: 8px;
}
.stack span:nth-child(even) {
  --glitch-translate: -8px;
}

@keyframes stack {
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow:
      -2px 3px 0 red,
      2px -3px 0 blue,
      0 0 0 green;
  }
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    text-shadow:
      2px -3px 0 red,
      -2px 3px 0 blue,
      0 0 0 green;
  }
  100% {
    text-shadow: none;
  }
}

@keyframes glitch {
  0% {
    text-shadow:
      -2px 3px 0 red,
      2px -3px 0 blue,
      0 0 0 green;
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow:
      2px -3px 0 red,
      -2px 3px 0 blue,
      0 0 0 green;
  }
  4%,
  100% {
    text-shadow: none;
    transform: none;
  }
}
</style>
