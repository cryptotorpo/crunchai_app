import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { AUTH_URL, SERVER_URL } from '@/constants'
import { jwtDecode } from 'jwt-decode'
import { toast } from 'vue3-toastify'

export const useApiStore = defineStore(
  'api',
  () => {
    const token = ref(null)

    const accessToken = computed(() => token.value?.accessToken)
    const refreshToken = computed(() => token.value?.refreshToken)
    const tokenType = computed(() => token.value?.tokenType)

    const _fetch = async (url, options = {}) => {
      await refreshTokenIfNeeded()
      const headers = { ...options.headers }
      if (accessToken.value) {
        headers.Authorization = `${tokenType.value} ${accessToken.value}`
      }
      const fetchOptions = { ...options, headers }
      const response = await fetch(`${SERVER_URL}${url}${options.query || ''}`, fetchOptions)
      if (!response.ok) {
        console.log('fetch error', response)
        toast.error('Failed to fetch data')
        return null
      }
      return await response.json()
    }

    const auth = async (address, signature) => {
      const data = await _fetch('/auth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: address, signature }),
      })
      if (data.accessToken) {
        token.value = data
      }
      return accessToken.value
    }

    const clearToken = () => (token.value = null)

    const refreshTokenIfNeeded = async () => {
      // check if the token is expired
      if (!accessToken.value) {
        return
      }
      const decodedToken = jwtDecode(accessToken.value)
      if (decodedToken.exp < Date.now() / 1000 && refreshToken.value) {
        const formData = new FormData()
        formData.append('token', refreshToken.value)
        const response = await fetch(`${SERVER_URL}/auth/refresh`, {
          method: 'POST',
          body: formData,
        })
        const data = await response.json()
        if (data.accessToken) {
          token.value = data
        }
      }
    }

    const getApps = async () => await _fetch('/app')

    const getJob = async (jobId) =>
      await _fetch(`/job/${jobId}`, {
        method: 'GET',
        headers: {
          Authorization: `${tokenType.value} ${accessToken.value}`,
        },
      })

    const getJobs = async (offset = 0, limit = 25, appId = null) =>
      await _fetch('/job/finished', {
        query: `?offset=${offset}&limit=${limit}${appId ? `&app_id=${appId}` : ''}`,
      })

    const getUserJobs = async (offset = 0, limit = 25) =>
      await _fetch('/job', {
        query: `?offset=${offset}&limit=${limit}`,
      })

    const submitJob = async (formData) =>
      await _fetch('/job', {
        method: 'POST',
        headers: {
          Authorization: `${tokenType.value} ${accessToken.value}`,
        },
        body: formData,
      })

    const getPerfStats = async () => {
      const response = await fetch('/api/perf-stats')
      return await response.json()
    }

    const getDevlog = async () => await _fetch('/devlog')

    const submitFeedback = async (formData) =>
      await _fetch('/bugreport', {
        method: 'POST',
        body: formData,
      })

    return {
      token,
      accessToken,
      refreshToken,
      fetch: _fetch,
      auth,
      clearToken,
      getApps,
      submitJob,
      getJob,
      getJobs,
      getUserJobs,
      getPerfStats,
      getDevlog,
      submitFeedback,
    }
  },
  {
    persist: true,
  },
)
