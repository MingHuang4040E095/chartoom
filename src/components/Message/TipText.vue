<script setup>
// 文字提示
import { defineModel } from 'vue'

// 是否顯示 true:顯示 false:隱藏
const visible = defineModel({
  default: true,
  type: Boolean,
})
</script>
<template>
  <div class="tip-text relative isolate">
    <slot></slot>
    <div v-if="visible" class="tip-text-label" :data-text="'123'"></div>
  </div>
</template>
<style lang="scss" scoped>
.tip-text-label {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 2px);
}
.tip-text-label::before {
  content: '';
  display: inline-block;
  position: absolute;
  transform: translateX(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  @apply z-1 bg-red rounded-2px;
}
.tip-text-label::after {
  content: attr(data-text);
  @apply absolute top-full transform-translate-y-1 -transform-translate-x-1/2 rounded-1 px-2 py-1 font-size-3 bg-red color-white z-2;
}
</style>
