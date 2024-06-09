<script setup>
import { reactive } from 'vue'
// 登入頁
import CardBasic from '@/components/Card/CardBasic.vue' // 基礎卡片樣式
import InputBasic from '@/components/Form/InputBasic.vue' // 基礎輸入框樣式

const form = reactive({
  email: '', // 帳號(信箱)
  password: '', // 密碼
})
</script>
<template>
  <section
    class="login flex justify-center items-center px-4 py-8 md:px-8 md-py-16"
  >
    <CardBasic class="w-full px-8 py-2">
      <h1 class="text-primary-200 text-center">登入</h1>
      <div>
        <div class="mb-6">
          <label
            class="block font-size-6 font-bold text-primary-100 mb-2"
            for=""
            >帳號(email)</label
          >
          <div>
            <!-- <input type="text" /> -->
            <InputBasic v-model="form.email" placeholder="example@gmail.com" />
          </div>
        </div>
        <div>
          <label
            class="block font-size-6 font-bold text-primary-100 mb-2"
            for=""
            >密碼</label
          >
          <div>
            <InputBasic v-model="form.password" type="password" />
          </div>
        </div>
      </div>
    </CardBasic>
  </section>
</template>
<style lang="scss" scoped>
.login {
  height: 100vh;

  > div {
    max-width: 500px;
    aspect-ratio: 4 / 5;
  }
}
</style>
