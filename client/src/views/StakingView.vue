<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { account, readContract } from '@kolirt/vue-web3-auth'
import GlitchText from '@/components/GlitchText.vue'

import { toast } from 'vue3-toastify'

import { STAKE_CONTRACT_ADDRESS, STAKE_CONTRACT_ABI } from '@/stakingConfig.js'

const stakedAmount = ref(null)
const canWithdraw = ref(false)

const address = computed(() => account.address)
const shortAddress = computed(() => account.shortAddress)

const loading = ref({
  stakes: false,
  withdraw: false,
  isEmergency: false,
})

const fetchStakes = async () => {
  if (!address.value) return
  try {
    loading.value.stakes = true
    let data = await readContract({
      address: STAKE_CONTRACT_ADDRESS,
      abi: STAKE_CONTRACT_ABI,
      functionName: 'stakes',
      args: [address.value],
    })
    const [amount] = data
    const formattedAmount = formatUnits(amount, 18)
    stakedAmount.value = formattedAmount || 0
  } catch (error) {
    toast.error(`Failed to fetch your staked amount:\n${error.message}.`)
    console.log('fetchStakes error', error)
  } finally {
    loading.value.stakes = false
  }
}

const fetchIsEmergency = async () => {
  try {
    loading.value.isEmergency = true
    let data = await readContract({
      address: STAKE_CONTRACT_ADDRESS,
      abi: STAKE_CONTRACT_ABI,
      functionName: 'isEmergency',
    })
    const isEmergency = data
    canWithdraw.value = isEmergency
  } catch (error) {
    toast.error(`Failed to fetch withdraw status:\n${error.message}.`)
    console.log('fetchIsEmergency error', error)
  } finally {
    loading.value.isEmergency = false
  }
}

const withdraw = async () => {
  if (Object.values(loading.value).some((value) => value)) return
  try {
    loading.value.withdraw = true
    await readContract({
      address: STAKE_CONTRACT_ADDRESS,
      abi: STAKE_CONTRACT_ABI,
      functionName: 'emergencyWithdraw',
    })
  } catch (error) {
    toast.error(`Failed to withdraw:\n${error.message}.`)
    console.log('withdraw error', error)
  } finally {
    loading.value.withdraw = false
  }
}

const formatUnits = (value, decimals) => {
  return Number(value) / 10 ** decimals
}

const refresh = async () => {
  await fetchStakes()
  await fetchIsEmergency()
}

watch(address, refresh)

onMounted(async () => {
  await refresh()
})
</script>

<template>
  <div class="content">
    <h1 class="is-title is-square-pixel-7 mt-4">Staking</h1>

    <div class="hero is-medium">
      <div class="hero-body has-text-centered">
        <section class="section">
          <p>Staking is now halted. Please remove your stakes.</p>
          <p>We are currently preparing our V2 Staking Contract for Deployment.</p>
          <p>More info on this soon.</p>
        </section>

        <div class="box is-shadowless">
          <nav v-if="!loading.stakes" class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Address</p>
                <p class="title">{{ shortAddress }}</p>
              </div>
            </div>

            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Staked</p>
                <p class="title">{{ stakedAmount }}</p>
              </div>
            </div>

            <p v-if="canWithdraw && stakedAmount" class="level-item has-text-centered">
              <button
                class="button is-primary is-outlined"
                :class="{ 'is-loading': loading.withdraw }"
                @click="withdraw"
                :disabled="loading.withdraw"
              >
                Withdraw
              </button>
            </p>
          </nav>

          <div v-if="loading.stakes || loading.isEmergency" class="has-text-centered">
            <glitch-text :min-interval="1" :max-interval="3">
              <span class="is-size-4 is-square-pixel-7">Loading...</span>
            </glitch-text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
