<script setup>
// 登入頁
import { inject, reactive, ref } from 'vue'
// -- 組件 --
import ButtonBasic from '@/components/Button/ButtonBasic.vue' // 基礎按鈕樣式
import ButtonLink from '@/components/Button/ButtonLink.vue' // 連結按鈕樣式
import ButtonPlain from '@/components/Button/ButtonPlain.vue' // 邊框按鈕樣式
import CardBasic from '@/components/Card/CardBasic.vue' // 基礎卡片樣式
import DividingLine from '@/components/DividingLine.vue' // 分隔線
import FormContainer from '@/components/Form/FormContainer.vue' // 表單容器
import FormItem from '@/components/Form/FormItem.vue' // 表單欄位
import InputBasic from '@/components/Form/InputBasic.vue' // 基礎輸入框樣式
// 表單
const form = reactive({
  email: '', // 帳號(信箱)
  password: '', // 密碼
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

const formContainerRef = ref(null)

const login = async () => {
  await formContainerRef.value.verifyAllFields()
}

const goPage = inject('goPage')
</script>
<template>
  <section
    class="login-block flex justify-center items-center px-4 py-8 md:px-8 md-py-16"
  >
    <CardBasic class="w-full px-8 py-2">
      <h1 class="text-primary-200 text-center">登入</h1>
      <FormContainer ref="formContainerRef" :data="form" :rules="formRules">
        <FormItem label="帳號(email)" filedName="email">
          <InputBasic v-model="form.email" placeholder="example@gmail.com" />
        </FormItem>
        <FormItem label="密碼" filedName="password">
          <InputBasic v-model="form.password" id="password" type="password" />
        </FormItem>
        <div class="mt-2 mb-4">
          <ButtonLink>忘記密碼?</ButtonLink>
        </div>
      </FormContainer>
      <div class="flex justify-center">
        <ButtonBasic class="font-bold w-full" type="round" @click="login"
          >登入</ButtonBasic
        >
      </div>
      <DividingLine>
        <span>社群登入</span>
      </DividingLine>
      <div class="community-block mb-4">
        <ButtonPlain>Google</ButtonPlain>
        <ButtonPlain>Line</ButtonPlain>
        <ButtonPlain>FaceBook</ButtonPlain>
      </div>
      <div class="flex justify-center">
        <ButtonLink @click="goPage('Register')"
          >還沒有帳號? 馬上註冊!</ButtonLink
        >
      </div>
    </CardBasic>
  </section>
</template>
<style lang="scss" scoped>
.login-block {
  height: 100vh;

  > div {
    max-width: 500px;
    aspect-ratio: 4 / 5;
  }
}

// 社群登入按鈕
.community-block {
  button + button {
    @apply mt-4;
  }
}
</style>
