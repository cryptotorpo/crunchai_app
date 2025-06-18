<script setup>
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { RouterLink, useRouter } from 'vue-router'
import { connect } from '@kolirt/vue-web3-auth'

import InfraWLogoIcon from '@/components/icons/InfraWLogoIcon.vue'
import LinkVariantIcon from '@/components/icons/LinkVariantIcon.vue'
import MenuIcon from '@/components/icons/MenuIcon.vue'

import GlitchText from '@/components/GlitchText.vue'

const userStore = useUserStore()
const { isLoggedIn } = storeToRefs(userStore)

const router = useRouter()
const routes = computed(() =>
  router
    .getRoutes()
    .filter((route) => route.meta.sidebar && !(route.meta.requiresAuth && !isLoggedIn.value)),
)
const primaryRoutes = computed(() => routes.value.filter((route) => !!!route.meta.inMenu))
const secondaryRoutes = computed(() => routes.value.filter((route) => route.meta.inMenu))

const isMenuOpen = ref(false)
</script>

<template>
  <div class="mobile-bar p-2 has-background-primary-00" role="contentinfo">
    <transition name="fade">
      <div v-if="isMenuOpen" class="is-clipped pb-0">
        <div class="navigation-links field is-grouped">
          <router-link
            v-for="route in secondaryRoutes"
            :key="route.path"
            :to="route.path"
            v-slot="{ navigate, href, isActive }"
            custom
          >
            <div class="control is-expanded">
              <a
                class="button is-fullwidth"
                :href="href"
                @click="navigate"
                :aria-label="route.meta.name"
                :class="[isActive ? 'is-primary' : 'is-ghost']"
              >
                <span class="icon">
                  <component :is="route.meta.icon" />
                </span>
                <span class="is-square-pixel-7 is-size-7">
                  {{ route.meta.name }}
                </span>
              </a>
            </div>
          </router-link>
        </div>

        <glitch-text :stacks="3">
          <div
            class="beta-tag is-flex is-align-items-center is-justify-content-center is-square-pixel-7 has-text-info is-size-7 my-0"
          >
            Beta 1.7.2
          </div>
        </glitch-text>
      </div>
    </transition>

    <div
      class="navigation-links buttons is-flex is-flex-wrap-nowrap is-justify-content-space-around"
    >
      <router-link
        v-for="route in primaryRoutes"
        :key="route.path"
        :to="route.path"
        v-slot="{ navigate, href, isActive }"
        custom
      >
        <a
          v-if="route.meta.sidebar"
          class="navigation-links-item button is-flex is-flex-direction-column has-text-centered"
          :href="href"
          @click="navigate"
          :aria-label="route.meta.name"
          :class="[isActive ? 'is-primary' : 'is-ghost']"
        >
          <span class="icon m-0">
            <component :is="route.meta.icon" />
          </span>
          <span class="is-square-pixel-7 is-size-7">
            {{ route.meta.name }}
          </span>
        </a>
      </router-link>

      <a
        ref="mobileMenuButton"
        class="navigation-links-item button is-flex is-flex-direction-column has-text-centered"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="icon m-0">
          <menu-icon />
        </span>
        <span class="is-square-pixel-7 is-size-7">Menu</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  height: 0;
}
</style>
