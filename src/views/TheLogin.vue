<script setup>
import { reactive } from 'vue'
// 登入頁
import ButtonBasic from '@/components/Button/ButtonBasic.vue' // 基礎按鈕樣式
import CardBasic from '@/components/Card/CardBasic.vue' // 基礎卡片樣式
import FormContainer from '@/components/Form/FormContainer.vue' // 表單容器
import FormItem from '@/components/Form/FormItem.vue' // 表單欄位
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
        <FormContainer>
          <FormItem filedName="email">
            <InputBasic v-model="form.email" placeholder="" />
          </FormItem>
          <FormItem filedName="email">
            <InputBasic v-model="form.password" placeholder="" />
          </FormItem>
        </FormContainer>
        <!-- <div class="form-item">
          <label
            class="block font-size-6 font-bold text-primary-100 mb-2"
            for="email"
            >帳號(email)</label
          >
          <div>
            <InputBasic
              v-model="form.email"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>
        </div>
        <div class="form-item">
          <label
            class="block font-size-6 font-bold text-primary-100 mb-2"
            for="password"
            >密碼</label
          >
          <div class="mb-2">
            <InputBasic v-model="form.password" id="password" type="password" />
          </div>
          <ButtonLink>忘記密碼?</ButtonLink>
        </div> -->
        <div class="form-item text-right">
          <ButtonBasic class="font-bold" type="round">登入</ButtonBasic>
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

.form-item + .form-item {
  @apply mt-4;
}
</style>
