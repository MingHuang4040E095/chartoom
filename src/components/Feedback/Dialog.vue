<script setup>
import { defineModel, defineProps } from 'vue'
const modelValue = defineModel({
  default: true,
  type: Boolean,
})

const props = defineProps({
  // 標題
  title: {
    type: String,
    default: '標題',
  },
})
</script>
<template>
  <div
    class="warp bg-#0000007a w-full h-full fixed top-0 left-0 flex justify-center items-center"
  >
    <div
      v-if="modelValue"
      class="dialog bg-white w-full max-w-xl h-lg rounded-2 z-2000"
    >
      <div>{{ props.title }}</div>
      <slot></slot>
    </div>
  </div>
</template>
