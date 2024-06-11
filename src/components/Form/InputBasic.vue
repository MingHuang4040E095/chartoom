<script setup>
import { defineEmits, defineModel, ref } from 'vue'
import IconCancel from '../Icon/IconCancel.vue'
const props = defineProps({
  // 輸入框類型
  type: {
    type: String,
    default: 'text',
  },
})
// input的值
const inputValue = defineModel({
  default: '',
  type: [String, Number],
})

const emit = defineEmits([
  'focus', // 聚焦
  'blur', // 失焦
])

const iconVisible = ref(false) // icon是否顯示  true:顯示 false:隱藏
// 清除input的值
const clearInputValue = () => {
  inputValue.value = ''
  iconVisible.value = false // icon隱藏
}

/**
 * 處理焦點
 * @param {[MouseEvent]} e 預設事件
 */
const handleFocus = (e) => {
  iconVisible.value = true // icon顯示
  emit('focus', e)
}

/**
 * 處理失焦
 * @param {[MouseEvent]} e 預設事件
 */
const handleBlur = async (e) => {
  emit('blur', e)
  setTimeout(() => {
    iconVisible.value = false // icon隱藏
  }, 200)
}
</script>
<template>
  <div class="input-basic relative">
    <input
      class="font-size-4 tracking-2px text-primary-100 w-full rounded-12 outline-none px-4 py-2 pr-8"
      border="2px solid primary-100"
      :type="props.type"
      v-model="inputValue"
      v-bind="$attrs"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <IconCancel
      v-show="iconVisible"
      class="absolute top-1/2 right-3 -transform-translate-y-1/2 text-primary-100 cursor-pointer"
      @click.stop="clearInputValue"
    />
  </div>
</template>
<style lang="scss" scoped></style>
