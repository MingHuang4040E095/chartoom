<script setup>
import TheHeader from '@/components/TheHeader.vue' // 主選單
import { computed, provide } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

console.log(router)

/**
 * 跳轉頁面
 * @param {[String]} name 路由名稱
 * @param {[Object]} params 路由參數
 * @param {[Object]} query 路由參數
 */
const goPage = (name, params = {}, query = {}) => {
  router.push({ name, params, query })
}
provide('goPage', goPage)

// 是否顯示header
const headerVisible = computed(() => {
  // 要隱藏header的路由
  const hiddenHeaderRoutes = ['Login', 'Register']
  return !hiddenHeaderRoutes.includes(route.name)
})
</script>
<template>
  <TheHeader v-if="headerVisible" />
  <body>
    <RouterView></RouterView>
  </body>
</template>
<style lang="scss">
body {
  background-color: #eee4e1;
}
</style>
