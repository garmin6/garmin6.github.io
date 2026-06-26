import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/app',
    name: 'app-gallery',
    component: () => import('@/views/AppGallery.vue'),
  },
  {
    path: '/app/disc-test',
    name: 'disc-test',
    component: () => import('@/views/disc-test/DiscTestPage.vue'),
  },
  {
    path: '/app/sushiro',
    name: 'sushiro',
    component: () => import('@/views/sushiro/SushiroPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
