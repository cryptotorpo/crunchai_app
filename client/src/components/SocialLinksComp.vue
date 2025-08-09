<script setup>
import LogoXIcon from '@/components/icons/social/LogoXIcon.vue'
import LogoDexIcon from '@/components/icons/social/LogoDexIcon.vue'
import LogoTelegramIcon from '@/components/icons/social/LogoTelegramIcon.vue'

const socialLinks = [
  { name: 'X', icon: LogoXIcon, href: 'https://x.com/CrunchOnEth/' },
  {
    name: 'Dex',
    icon: LogoDexIcon,
    href: 'https://www.dextools.io/',
  },
  { name: 'Telegram', icon: LogoTelegramIcon, href: 'https://t.me/crunchoneth/' },
]
</script>

<template>
  <div class="social-links is-flex is-justify-content-space-around is-align-items-center buttons">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      class="social-links-item has-text-centered has-text-grey"
      :href="link.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="link.name"
    >
      <span class="icon">
        <component :is="link.icon" />
      </span>
    </a>
  </div>
</template>

<style scoped>
.icon svg {
  width: 100%;
  height: 100%;
}

.social-links-item:hover {
  color: var(--bulma-text-grey-lighter) !important;
}
</style>
