import { computed, watch } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useApiStore } from './api'
import { useRouter } from 'vue-router'
import { account, signMessage } from '@kolirt/vue-web3-auth'
import { AUTH_PHRASE } from '@/constants'
import { jwtDecode } from 'jwt-decode'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const address = computed(() => account.address)
  const isLoggedIn = computed(() => {
    const { accessToken } = storeToRefs(useApiStore())
    return !!address.value && !!accessToken.value
  })

  watch(address, async (newAddress) => {
    const { accessToken } = storeToRefs(useApiStore())
    if (newAddress) {
      if (accessToken.value) {
        const decodedToken = jwtDecode(accessToken.value)
        if (decodedToken.sub !== newAddress) {
          useApiStore().auth(newAddress, await signMessage(AUTH_PHRASE))
        }
      } else {
        useApiStore().auth(newAddress, await signMessage(AUTH_PHRASE))
      }
    } else if (router.currentRoute.value.path === '/profile') {
      useApiStore().clearToken()
      router.push('/feed')
    }
  })

  return { address, isLoggedIn }
})
