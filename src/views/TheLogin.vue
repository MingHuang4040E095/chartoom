<script setup>
// 登入頁
import CardBasic from '@/components/Card/CardBasic.vue' // 基礎卡片樣式
</script>
<template>
  <section
    class="login flex justify-center items-center px-4 py-8 md:px-8 md-py-16"
  >
    <CardBasic class="w-full px-4 py-2">
      <h1 class="text-primary-200 text-center">登入</h1>
      <div>
        <div>
          <label for="">帳號</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <label for="">密碼</label>
          <div>
            <input type="password" />
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
