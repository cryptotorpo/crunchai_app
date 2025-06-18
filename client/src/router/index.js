import { createRouter, createWebHistory } from 'vue-router'

import EarthIcon from '@/components/icons/EarthIcon.vue'
import AppsIcon from '@/components/icons/AppsIcon.vue'
import ExpansionCardIcon from '@/components/icons/ExpansionCardIcon.vue'
import AccountCircleIcon from '@/components/icons/AccountCircleIcon.vue'
import CurrencySignIcon from '@/components/icons/CurrencySignIcon.vue'
import PostIcon from '@/components/icons/PostIcon.vue'
import ShieldBug from '@/components/icons/ShieldBug.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import('@/views/FeedView.vue'),
      meta: {
        sidebar: true,
        icon: EarthIcon,
        name: 'Feed',
      },
    },
    {
      path: '/apps',
      name: 'apps',
      component: () => import('@/views/AppsView.vue'),
      meta: {
        sidebar: true,
        icon: AppsIcon,
        name: 'Apps',
      },
    },
    {
      path: '/nodes',
      name: 'nodes',
      component: () => import('@/views/NodesView.vue'),
      meta: {
        sidebar: true,
        icon: ExpansionCardIcon,
        name: 'Nodes',
      },
    },
    {
      path: '/devlog',
      name: 'devlog',
      component: () => import('@/views/DevlogView.vue'),
      meta: {
        sidebar: true,
        icon: PostIcon,
        name: 'Devlog',
        inMenu: true,
      },
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('@/views/FeedbackView.vue'),
      meta: {
        sidebar: true,
        icon: ShieldBug,
        name: 'Feedback',
        inMenu: true,
      },
    },
    {
      path: '/staking',
      name: 'staking',
      component: () => import('@/views/StakingView.vue'),
      meta: {
        sidebar: true,
        icon: CurrencySignIcon,
        name: 'Staking',
        requiresAuth: true,
        inMenu: true,
      },
    },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: () => import('@/views/ProfileView.vue'),
    //   meta: {
    //     sidebar: true,
    //     icon: AccountCircleIcon,
    //     name: 'Profile',
    //     requiresAuth: true,
    //   },
    // },
    // catch all, redirect home
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/',
    },
  ],
})

export default router
