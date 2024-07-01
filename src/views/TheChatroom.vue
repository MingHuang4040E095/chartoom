<script setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>
<template>
  <section class="flex">
    <div class="pa-4">
      <aside
        class="the-aside bg-secondary-200 max-w-lg h-full w-full p-10 rounded-2"
      >
        <h1 class="text-primary-200 font-size-12 font-bold text-center">
          MH聊天室
        </h1>
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
