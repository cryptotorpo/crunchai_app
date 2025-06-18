<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { RouterLink, useRouter } from 'vue-router'
import { connect } from '@kolirt/vue-web3-auth'

import SocialLinks from '@/components/SocialLinksComp.vue'

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
</script>

<template>
  <aside
    id="sidenav"
    class="sidebar is-flex is-flex-direction-column p-2 has-background-primary-00"
    role="navigation"
  >
    <div class="is-flex-grow-1 is-flex is-flex-direction-column is-justify-content-space-between">
      <div
        class="navigation-links buttons is-flex is-flex-direction-column is-align-items-start is-justify-content-space-around"
      >
        <a class="has-text-white p-1 is-flex is-align-items-center" href="/" aria-label="Home">
          <span class="icon is-medium">
            <InfraW-logo-icon />
          </span>
          <span class="InfraW-logo-text nav-description ml-2">
            <glitch-text :stacks="3">
              <span class="is-size-4 is-square-pixel-7">InfraW</span>
            </glitch-text>
          </span>
        </a>

        <router-link
          v-for="route in primaryRoutes"
          :key="route.path"
          :to="route.path"
          v-slot="{ navigate, href, isActive }"
          custom
        >
          <a
            v-if="route.meta.sidebar"
            class="navigation-links-item button is-fullwidth is-justify-content-start"
            :href="href"
            @click="navigate"
            :aria-label="route.meta.name"
            :class="[isActive ? 'is-primary' : 'is-ghost']"
          >
            <span class="icon is-medium">
              <component :is="route.meta.icon" />
            </span>
            <span class="nav-description is-square-pixel-7 ml-2">
              {{ route.meta.name }}
            </span>
            <span
              class="nav-tooltip is-square-pixel-7 has-text-white has-background-primary-00 has-text-left ml-2"
            >
              {{ route.meta.name }}
            </span>
          </a>
        </router-link>

        <a
          v-if="!isLoggedIn"
          class="navigation-links-item button is-ghost is-fullwidth is-justify-content-start has-text-danger"
          @click="connect"
          aria-label="Connect"
        >
          <span class="icon is-medium">
            <link-variant-icon />
          </span>
          <span class="nav-description is-square-pixel-7 ml-2"> Connect </span>
          <span
            class="nav-tooltip is-square-pixel-7 has-text-white has-background-primary-00 has-text-left ml-2"
          >
            Connect
          </span>
        </a>
      </div>

      <div class="navigation-links buttons are-small">
        <router-link
          v-for="route in secondaryRoutes"
          :key="route.path"
          :to="route.path"
          v-slot="{ navigate, href, isActive }"
          custom
        >
          <a
            v-if="route.meta.sidebar"
            class="navigation-links-item button is-fullwidth is-justify-content-start is-ghost mx-1"
            :href="href"
            @click="navigate"
            :aria-label="route.meta.name"
            :class="[isActive ? 'has-text-white' : 'has-text-grey-light']"
          >
            <span class="icon is-small">
              <component :is="route.meta.icon" />
            </span>
            <span class="nav-description is-square-pixel-7 ml-2">
              {{ route.meta.name }}
            </span>
            <span
              class="nav-tooltip is-square-pixel-7 has-text-white has-background-primary-00 has-text-left ml-2"
            >
              {{ route.meta.name }}
            </span>
          </a>
        </router-link>
      </div>
    </div>

    <glitch-text :stacks="3" :min-interval="5" :max-interval="10">
      <div
        class="beta-tag is-flex is-align-items-center is-justify-content-center is-square-pixel-7 has-text-info has-text-centered is-size-7 my-4"
      >
        Beta 1.7.2
      </div>
    </glitch-text>

    <social-links />
  </aside>
</template>

<style scoped>
.navigation-links-item {
  position: relative;
}

.nav-tooltip {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.25rem 0.5rem;
  white-space: nowrap;
  pointer-events: none;
  overflow: hidden;
  opacity: 0;
  width: 0;
  transition:
    opacity 0.2s ease,
    width 0.2s ease;
}

.navigation-links-item:hover .nav-tooltip {
  opacity: 1;
  width: 6rem;
}

.beta-tag {
  line-height: 0.9;
}
</style>
