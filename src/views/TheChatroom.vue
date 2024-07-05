<script setup>
import ButtonBasic from '@/components/Button/ButtonBasic.vue' // 基礎按鈕樣式
import { ref } from 'vue'

const inputValue = ref('')
</script>
<template>
  <section class="flex">
    <div class="pa-4 w-full max-w-300px">
      <aside
        class="the-aside flex flex-col bg-secondary-200 h-full px-10 py-4 rounded-2"
      >
        <h3 class="text-primary-200 font-size-9 font-bold text-center my-4">
          MH聊天室
        </h3>

        <ul class="list-none pl-0">
          <li v-for="i in 10" class="flex items-center gap-2 font-size-4 mb-2">
            <span
              class="bg-white rounded-full w-24px h-24px inline-block"
            ></span>
            <span>username</span>
          </li>
        </ul>

        <ButtonBasic class="font-bold w-full mt-auto" type="round"
          >離開</ButtonBasic
        >
      </aside>
    </div>
    <div class="pa-4 flex flex-col flex-grow flex-shrink gap-4">
      <div class="flex-grow flex-shrink bg-secondary-200 h-full rounded-2 pa-4">
        123
      </div>
      <div class="flex-grow-0 flex-shrink-0 bg-secondary-200 rounded-2 pa-4">
        <!-- <InputBasic v-model="inputValue" placeholder="輸入訊息" /> -->
      </div>
    </div>
  </section>
</template>
