import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    // 首頁
    path: '/',
    name: 'Home',
    component: () => import('@/views/TheHome.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
