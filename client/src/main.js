import 'bulma/css/bulma.min.css'
import 'vue3-toastify/dist/index.css'
import './assets/main.css'

import { createApp } from 'vue'

import Vue3Toastify from 'vue3-toastify'

import pinia from '@/plugins/pinia'
import web3Auth from '@/plugins/web3Auth'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(web3Auth)
app.use(Vue3Toastify, {
  autoClose: 3000,
  theme: 'dark',
})
app.mount('#app')
