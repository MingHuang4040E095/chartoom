import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    // 首頁
    path: '/',
    name: 'Home',
    component: () => import('@/views/TheHome.vue'),
  },
  {
    // 登入
    path: '/login',
    name: 'Login',
    component: () => import('@/views/TheLogin.vue'),
  },
  {
    // 登入
    path: '/register',
    name: 'Register',
    component: () => import('@/views/TheRegister.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
