<script setup>
import { onMounted, ref } from 'vue'
import { useApiStore } from '@/stores/api'
import { RouterLink } from 'vue-router'
import AppFormComp from '@/components/forms/AppForm.vue'
import ModalComp from '@/components/layout/ModalComp.vue'

const api = useApiStore()

const apps = ref([])
const loading = ref(true)
const modalApp = ref(null)

const stripBeta = (name) => {
  return name.replace(/beta^/i, '').trim()
}

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const getStars = (power) => {
  return (
    Array.from({ length: power }, () => '★').join('') +
    Array.from({ length: 5 - power }, () => '☆').join('')
  )
}

onMounted(async () => {
  apps.value = await api.getApps()
  loading.value = false
})
</script>

<template>
  <div class="dynamic-columns mt-2" id="appsTable">
    <template v-if="loading">
      <div v-for="n in 3" :key="n" class="card app-card m-0 is-unselectable is-radiusless">
        <div class="card-background is-flex is-flex-direction-column">
          <div class="card-content is-flex-grow-1">
            <div class="media">
              <div class="media-content">
                <h3 class="skeleton-text"></h3>
              </div>
            </div>

            <div class="content m-0 px-2">
              <div class="app-tile-header mb-2 is-square-pixel-7">
                <h5 class="skeleton-text"></h5>
                <h5 class="skeleton-text"></h5>
                <h5 class="skeleton-text"></h5>
              </div>

              <p class="skeleton-text"></p>
            </div>
          </div>

          <div class="card-footer is-flex-shrink-1">
            <button class="card-footer-item is-primary skeleton-text"></button>
            <button class="card-footer-item is-primary skeleton-text"></button>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div
        v-for="app in apps"
        :key="app.id"
        class="card app-card m-0 is-unselectable is-radiusless"
        :class="`${app.state}-card`"
      >
        <div class="card-background is-flex is-flex-direction-column">
          <div class="card-content is-flex-grow-1">
            <div class="media">
              <div class="media-content">
                <template v-if="app.name.toLowerCase().includes('beta')">
                  <h3 class="is-size-5 is-family-monospace">
                    {{ stripBeta(app.name) }} <sup class="is-beta">beta</sup>
                  </h3>
                </template>
                <template v-else>
                  <h3 class="is-size-5 is-family-monospace">{{ app.name }}</h3>
                </template>
              </div>
            </div>

            <div class="content m-0 px-2">
              <div class="app-tile-header mb-2 is-square-pixel-7">
                <h5>
                  Type: <span>{{ capitalize(app.output) }}</span>
                </h5>

                <h5>
                  Power:
                  <span class="app-power">
                    {{ getStars(app.power) }}
                  </span>
                </h5>

                <h5>By: <span>Crunch AI</span></h5>
              </div>

              <p>{{ app.description }}</p>
            </div>
          </div>

          <footer class="card-footer">
            <a class="card-footer-item is-square-pixel-7 has-text-primary" @click="modalApp = app">
              Generate
            </a>

            <router-link :to="`/feed?appId=${app.id}`" custom v-slot="{ navigate }">
              <a class="card-footer-item is-square-pixel-7 has-text-primary" @click="navigate">
                Generations
              </a>
            </router-link>
          </footer>
        </div>
      </div>
    </template>

    <div v-if="!loading" class="card app-card has-text-centered is-radiusless">
      <div
        class="card-background is-flex is-justify-content-center is-align-items-center"
        style="height: 100%"
      >
        <div class="card-content">
          <h3 class="is-square-pixel-7">More to come</h3>
          <p>Check back soon for more apps!</p>
        </div>
      </div>
    </div>
  </div>

  <modal-comp v-if="modalApp" :show="true" @close="modalApp = null">
    <app-form-comp :app="modalApp" @close="modalApp = null" />
  </modal-comp>
</template>

<style scoped>
.dynamic-columns {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1rem;
}

.app-power {
  color: gold;
}

.app-tile-beta {
  font-size: 0.8rem;
  font-weight: 300;
  text-transform: uppercase;
}

.app-tile-header h4 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
  margin: 0;
}

.app-tile-header h5 {
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 300;
  margin: 0;
}

.app-card {
  min-width: 20rem;
}

.card-background {
  height: 100%;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 90deg;
  inherits: false;
}

.featured-card {
  position: relative;
}

.featured-card::before {
  content: '';
  position: absolute;
  inset: -2px;
  z-index: -1;
  background: conic-gradient(
    from var(--angle),
    hsl(0, 0%, 0%) 0%,
    hsl(0, 0%, 100%) 25%,
    hsl(0, 0%, 0%) 25%,
    hsl(0, 0%, 100%) 50%,
    hsl(0, 0%, 0%) 50%,
    hsl(0, 0%, 100%) 75%,
    hsl(0, 0%, 0%) 75%,
    hsl(0, 0%, 100%) 100%
  );
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

.skeleton-card {
  background-color: var(--bulma-card-content-background-color);
}

.skeleton {
  background-color: var(--bulma-card-background-color);
  border-radius: 4px;
}

.skeleton-text {
  height: 1rem;
  margin: 0.5rem 0;
  background: linear-gradient(
    90deg,
    hsl(0, 0%, 20%),
    var(--bulma-card-background-color),
    hsl(0, 0%, 20%),
    var(--bulma-card-background-color)
  );
  background-size: 200%;
  animation: shine 1s infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>
