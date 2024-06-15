<script setup>
import { defineExpose, defineProps, provide, reactive } from 'vue'

const props = defineProps({
  // 要驗證的表單資料
  data: {
    type: Object,
    default: () => {
      return {}
    },
  },
  // 驗證規則
  rules: {
    type: Object,
    default: () => {
      return {
        // '欄位名稱': {
        //     message: '請輸入欄位名稱',
        //     trigger: ['blur', 'change'],
        //  }
      }
    },
  },
})

// 儲存底下的formItem欄位
const formItemFields = reactive({
  // 格式如下
  // Symbol('fieldKey'): {
  //   value: '',
  //   callback(){
  //   }
  // },
})
provide('formFields', formItemFields)
// 提供驗證規則給子層使用
provide('rules', props.rules)

// 驗證所有欄位
const verifyAllFields = async () => {
  const properties = Object.getOwnPropertySymbols(formItemFields)
  // 屬性跑回圈取值
  for (let i = 0; i < properties.length; i++) {
    const fieldKey = properties[i] // 取得欄位
    const field = formItemFields[fieldKey] // 取得欄位
    const value = field.value // 欄位值
    const trigger = 'direct' // 觸發時機  blur:失焦 focus:聚焦 change:值改變 direct:直接驗證
    await field.triggerCallback(trigger, value)
  }
}

defineExpose({
  verifyAllFields, // 驗證所有欄位
})
</script>
<template>
  <form v-bind="$attrs">
    <slot></slot>
  </form>
</template>
