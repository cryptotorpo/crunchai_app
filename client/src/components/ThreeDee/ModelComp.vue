<script setup>
import { shallowRef, Suspense, watch } from 'vue'
import { useLoop } from '@tresjs/core'
import { GLTFModel } from '@tresjs/cientos'

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  rotate: {
    type: Boolean,
    default: true,
  },
})

const modelRef = shallowRef(null)
const { onBeforeRender } = useLoop()

watch(modelRef, (model) => {
  model.rotation.y = Math.PI

  model.traverse((child) => {
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach((material) => {
          material.metalness = material.metalness * 0.1
        })
      } else {
        child.material.metalness = child.material.metalness * 0.1
      }
    }
  })
})

onBeforeRender(({ delta }) => {
  if (!modelRef.value || !props.rotate) return
  modelRef.value.rotation.y += delta
})
</script>

<template>
  <TresGroup>
    <Suspense>
      <TresGroup ref="modelRef">
        <GLTFModel :path="url" draco />
      </TresGroup>
    </Suspense>
  </TresGroup>
</template>
