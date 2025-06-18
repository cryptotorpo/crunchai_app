<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAssetStore } from '@/stores/assetStore'

const props = defineProps({
  url: String,
})

const assetStore = useAssetStore()

const containerRef = ref(null)
const snapshotUrl = ref('')

// Three.js variables
let scene, camera, renderer, model

// Watch for URL changes
watch(
  () => props.url,
  (newUrl) => {
    if (newUrl) {
      cleanup()
      init()
    }
  },
)

const init = () => {
  // Setup scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color('#010101')

  // Setup camera
  camera = new THREE.PerspectiveCamera(75, 1024 / 1024, 0.1, 1000)
  camera.position.set(0, 0, 1)

  // Setup renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(1024, 1024)
  containerRef.value.appendChild(renderer.domElement)

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xfff0f0, 0.8) // Changed to a warm studio light color (gold)
  scene.add(ambientLight)

  const directionalLight1 = new THREE.DirectionalLight(0xf0fff0, 0.8)
  directionalLight1.position.set(1, 1, 1).normalize()
  scene.add(directionalLight1)

  const directionalLight2 = new THREE.DirectionalLight(0xf0f0ff, 0.8) // Changed color to a warm studio light color (gold)
  directionalLight2.position.set(-1, -1, -1).normalize()
  scene.add(directionalLight2)

  // Load model
  const loader = new GLTFLoader()
  loader.load(
    props.url,
    (gltf) => {
      model = gltf.scene

      // Reduce metalness of all materials
      model.traverse((node) => {
        if (node.isMesh && node.material) {
          if (Array.isArray(node.material)) {
            node.material.forEach((material) => {
              if (material.metalness !== undefined) {
                material.metalness = material.metalness * 0.1
              }
            })
          } else if (node.material.metalness !== undefined) {
            node.material.metalness = node.material.metalness * 0.1
          }
        }
      })

      scene.add(model)

      // Center and scale model
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center)
      // rotate model 180 degrees on the y axis
      model.rotation.y = Math.PI

      // Take snapshot once model is loaded
      takeSnapshot()

      // Signal completion
      assetStore.remove(props.url)
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error)
      assetStore.remove(props.url)
    },
  )
}

const takeSnapshot = () => {
  renderer.render(scene, camera)
  snapshotUrl.value = renderer.domElement.toDataURL()
}

const cleanup = () => {
  if (renderer) {
    renderer.dispose()
  }
  if (scene) {
    scene.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose()
      }
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose())
        } else {
          object.material.dispose()
        }
      }
    })
  }
}

onMounted(() => {
  // poll to check if the asset is in the active queue
  assetStore.add(props.url)
  const interval = setInterval(() => {
    if (assetStore.isActive(props.url)) {
      init()
      clearInterval(interval)
    }
  }, 100)
})

onBeforeUnmount(() => {
  assetStore.remove(props.url)
  cleanup()
})
</script>

<template>
  <div ref="containerRef" style="width: 1024px; height: 1024px; display: none"></div>
  <img v-if="snapshotUrl" :src="snapshotUrl" alt="3D Model Snapshot" />
  <div
    v-else
    class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
  >
    Loading...
  </div>
</template>
