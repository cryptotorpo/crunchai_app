<script setup>
import { ref, onMounted } from 'vue'
import { fetchToken } from '@kolirt/vue-web3-auth'
import backgroundVideo from '@/assets/videos/worldwide.mp4'
import { TOKEN_ADDRESS } from '@/stakingConfig.js'

const tokenBalance = ref(null)

const fetchTokenBalance = async () => {
  let data = await fetchToken({
    address: TOKEN_ADDRESS,
  })
  console.log('tokenBalance', data)
  tokenBalance.value = data.balance
}

onMounted(async () => {
  await fetchTokenBalance()
})
</script>

<template>
  <div class="video-container">
    <video
      :src="backgroundVideo"
      type="video/mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      crossorigin="anonymous"
      @error="handleVideoError"
    />
  </div>

  <section class="hero is-fullheight">
    <div class="hero-body is-flex is-flex-direction-column is-justify-content-center">
      <p class="title is-square-pixel-7 is-size-1">Crunch AI</p>
      <p class="subtitle">The Gateway to Crypto Native AI and Compute</p>
      <!-- <p class="subtitle">Token Balance: {{ tokenBalance }}</p> -->
      <a class="button is-primary mt-4" href="/apps">Explore Apps</a>
    </div>
  </section>
</template>

<style scoped>
.video-container {
  position: fixed;
  width: 200vw;
  height: 200vh;
  top: -50%;
  left: -50%;
  display: flex;
  overflow: hidden;
  z-index: -2;
}

video {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.video-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.5) 50%);
  background-size: 100% 4px;
}
</style>

<script>
export default {
  methods: {
    handleVideoError(e) {
      console.warn('Video playback error:', e)
      const videoContainer = e.target.parentElement
      if (videoContainer) {
        videoContainer.style.display = 'none'
      }
    },
  },
}
</script>
