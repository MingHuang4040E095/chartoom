<script setup>
// 文字提示
import { defineProps } from 'vue'

const props = defineProps({
  // 是否顯示 true:顯示 false:隱藏
  visible: {
    type: Boolean,
    default: true,
  },
  // 提示文字
  text: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="tip-text relative isolate">
    <slot></slot>
    <Transition>
      <div
        v-if="props.visible"
        class="tip-text-label"
        :data-text="props.text"
      ></div>
    </Transition>
  </div>
</template>
<style lang="scss" scoped>
.tip-text-label {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 2px);
  transition: all 1s;
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
  width: max-content;
  min-height: 26px;
  @apply absolute top-full transform-translate-y-1 -transform-translate-x-1/2 rounded-1 px-2 py-1 font-size-3 bg-red color-white z-2;
}

// 動畫
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
