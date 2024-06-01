<script setup>
import TheHeader from '@/components/TheHeader.vue' // 主選單
import { provide } from 'vue'
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
</script>
<template>
  <TheHeader v-if="route.name !== 'Login'" />
  <body>
    <RouterView></RouterView>
  </body>
</template>
<style lang="scss">
body {
  background-color: #eee4e1;
}
</style>
