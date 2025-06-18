<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import FilterVariantIcon from '@/components/icons/FilterVariantIcon.vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const emit = defineEmits(['changeAppFilter', 'openModal'])
const props = defineProps({
  apps: {
    type: Array,
    default: () => [],
  },
  appFilter: {
    type: String,
    default: null,
  },
})

const userStore = useUserStore()
const { isLoggedIn } = storeToRefs(userStore)

const appFilter = ref(props.appFilter)

const isMenuOpen = ref(false)
const dropdownContent = ref(null)

const hasMenu = computed(() => appFilter.value === null)

const changeAppFilter = () => {
  emit('changeAppFilter', appFilter.value)
}

const openModal = (app) => {
  console.log('openModal', app)
  emit('openModal', app)
  isMenuOpen.value = false
}

const handleClickOutside = (event) => {
  const container = document.querySelector('.generate-button')
  if (isMenuOpen.value && container && !container.contains(event.target)) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

watch(isMenuOpen, (newVal) => {
  if (!hasMenu.value) {
    openModal()
    return
  }

  const items = dropdownContent.value.children
  if (newVal) {
    ;[...items].forEach((item, index) => {
      setTimeout(() => {
        item.style.transform = 'translateX(0)'
      }, index * 50) // Stagger the animation by 100ms for each item
    })
  } else {
    ;[...items].reverse().forEach((item, index) => {
      setTimeout(() => {
        item.style.transform = 'translateX(100%)'
      }, index * 50) // Stagger the animation by 100ms for each item
    })
  }
})
</script>

<template>
  <div class="filter-bar py-2 mx-6">
    <div class="is-flex">
      <div class="is-flex-grow-1 m-0 mr-2 field has-addons">
        <div class="control has-icons-left is-expanded">
          <div class="select is-fullwidth">
            <select v-model="appFilter" @change="changeAppFilter">
              <option :value="null">All</option>
              <option v-for="app in props.apps" :key="app.id" :value="app.id">
                {{ app.name }}
              </option>
            </select>

            <p class="icon is-left p-2">
              <filter-variant-icon />
            </p>
          </div>
        </div>
      </div>

      <a
        v-if="isLoggedIn"
        class="generate-button button is-primary"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="is-square-pixel-7">Generate</span>
      </a>
      <a v-else class="generate-button button is-danger is-outlined" @click="connect">
        <span class="is-square-pixel-7">Connect</span>
      </a>
    </div>

    <div
      v-if="isLoggedIn"
      ref="dropdownContent"
      class="new-generation-menu"
      :class="{ 'is-active': isMenuOpen }"
    >
      <a
        v-for="app in props.apps"
        @click="openModal(app)"
        class="button is-fullwidth is-family-monospace p-4 is-radiusless is-black"
        :key="app.id"
      >
        {{ app.name }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.filter-bar {
  position: sticky;
  top: 0;
  z-index: 100;
}

/* .generate-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--bulma-radius);
  border: 1px solid hsl(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-l));
  animation: sonar-pulse 2s infinite ease-out;
} */

.new-generation-menu {
  position: absolute;
  top: 100%;
  right: 0;
  overflow: hidden;
  pointer-events: none;
}

.new-generation-menu.is-active {
  pointer-events: auto;
}

.new-generation-menu > * {
  transform: translateX(100%);
  transition: transform 0.2s;
}

@media only screen and (max-width: 639px) {
  .filter-bar {
    margin: 0 !important;
  }
}

@keyframes sonar-pulse {
  0% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
