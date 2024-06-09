<script setup>
import { computed } from 'vue'
const props = defineProps({
  // 寬度
  width: {
    type: String,
    default: 'auto',
  },
  // 類型
  type: {
    type: String,
    default: 'default', // default: 預設, round:藥丸型
  },
})
// 類型要使用哪個class
const typeClass = computed(() => {
  return props.type === 'round' ? 'rounded-8' : 'rounded-2'
})
</script>
<template>
  <button
    class="text-white font-size-4 bg-primary-100 border-none px-4 py-2 tracking-widest cursor-pointer hover:bg-primary-200 transition-all duration-300 ease-in-out"
    :class="[typeClass]"
  >
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped></style>
