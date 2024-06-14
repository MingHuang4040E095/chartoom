<script setup>
import { reactive } from 'vue'
// 登入頁
import ButtonBasic from '@/components/Button/ButtonBasic.vue' // 基礎按鈕樣式
import CardBasic from '@/components/Card/CardBasic.vue' // 基礎卡片樣式
import FormContainer from '@/components/Form/FormContainer.vue' // 表單容器
import FormItem from '@/components/Form/FormItem.vue' // 表單欄位
import InputBasic from '@/components/Form/InputBasic.vue' // 基礎輸入框樣式
// 表單
const form = reactive({
  email: '', // 帳號(信箱)
  emailToken: '', // 驗證碼
  password: '', // 密碼
  confirmPassword: '', // 確認密碼

  name: '', // 姓名
})
// 表單驗證規則
const formRules = {
  email: {
    message: '請輸入帳號',
    trigger: ['blur', 'change'],
    validator: (value) => {
      if (value === 'aaa') return true
      throw new Error('帳號錯誤')
    },
  },
  password: {
    message: '請輸入密碼',
    trigger: ['blur', 'change'],
  },
}
</script>
<template>
  <section
    class="register-block flex justify-center items-center px-4 py-8 md:px-8 md-py-16"
  >
    <CardBasic class="w-full px-8 py-2">
      <h1 class="text-primary-200 text-center">註冊</h1>
      <FormContainer :data="form" :rules="formRules">
        <FormItem label="姓名" filedName="name">
          <InputBasic v-model="form.name" />
        </FormItem>
        <FormItem label="帳號(email)" filedName="email">
          <InputBasic v-model="form.email" placeholder="example@gmail.com" />
        </FormItem>
        <FormItem label="密碼" filedName="password">
          <InputBasic v-model="form.password" type="password" />
        </FormItem>
        <FormItem label="確認密碼" filedName="confirmPassword">
          <InputBasic v-model="form.confirmPassword" type="password" />
        </FormItem>
      </FormContainer>
      <div class="mt-4 text-right">
        <ButtonBasic class="font-bold" type="round">註冊</ButtonBasic>
      </div>
    </CardBasic>
  </section>
</template>
<style lang="scss" scoped>
.register-block {
  height: 100vh;

  > div {
    max-width: 500px;
    aspect-ratio: 4 / 5;
  }
}
</style>
