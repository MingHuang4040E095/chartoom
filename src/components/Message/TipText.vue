<script setup>
// 文字提示
import { computed, defineProps } from 'vue'

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
  // 顯示位置
  position: {
    type: String,
    default: 'center',
    validator: (value) => {
      return ['left', 'center', 'right'].includes(value)
    },
  },
})

const className = computed(() => {
  return `tip-text-label--${props.position}`
})
</script>
<template>
  <div class="tip-text relative isolate">
    <slot></slot>
    <Transition>
      <div
        v-if="props.visible"
        class="tip-text-label"
        :class="[className]"
        :data-text="props.text"
      ></div>
    </Transition>
  </div>
</template>
<style lang="scss" scoped>
.tip-text-label {
  position: absolute;
  top: 100%;
  transform: translate(0, 2px);
  transition: all 1s;
  width: 100%;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 10px;
    height: 10px;
    @apply z-1 bg-red rounded-2px;
  }
  &::after {
    content: attr(data-text);
    width: max-content;
    min-height: 26px;
    // right: 0;
    @apply absolute top-full rounded-1 px-2 py-1 font-size-3 bg-red color-white z-2;
  }
  // 靠左
  &.tip-text-label--left {
    left: 0%;
    &::before {
      transform: translateX(100%) rotate(45deg);
    }
    &::after {
      transform: translate(0%, 2px);
    }
  }
  // 置中
  &.tip-text-label--center {
    left: 50%;
    &::before {
      transform: translateX(-50%) rotate(45deg);
    }
    &::after {
      transform: translate(-50%, 2px);
    }
  }
  // 靠右(預設)
  &.tip-text-label--right {
    left: 0;
    &::before {
      transform: translateX(-100%) rotate(45deg);
      right: 0;
    }
    &::after {
      right: 0;
      transform: translate(0%, 2px);
    }
  }
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
