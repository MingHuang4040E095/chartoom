<script setup>
import { inject } from 'vue'

const goPage = inject('goPage')
console.log(goPage)
</script>
<template>
  <header
    class="flex justify-between items-center bg-secondary-200 w-full px-10 py-4"
  >
    <div class="logo text-primary-200 font-size-6">logo</div>
    <nav class="flex gap-4 text-primary-200 font-size-4 [&>div]:cursor-pointer">
      <div>message</div>
      <div>userName</div>
      <div>setting</div>
      <div @click="goPage('Login')">登入</div>
      <div @click="goPage('Register')">註冊</div>
    </nav>
  </header>
</template>
