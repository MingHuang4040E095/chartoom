<script setup>
import { computed, defineProps, inject, provide } from 'vue'

// 儲存底下的formItem欄位
const formItemFields = inject('formFields')
const fieldKey = Symbol('fieldKey') // 欄位key (使用Symbol當唯一值)
provide('fieldKey', fieldKey)

const props = defineProps({
  // 欄位名稱
  filedName: {
    type: String,
    required: true,
  },
})

// 欄位狀態
const fieldStatus = computed(() => {
  const fieldValue = formItemFields[fieldKey]
  return !!fieldValue
})

// 驗證錯誤時加上class
const formItemError = computed(() => {
  return fieldStatus.value ? '' : 'form-item--error'
})
</script>
<template>
  <div :class="[formItemError]">
    <div>{{ fieldStatus }}</div>
    <slot></slot>
  </div>
</template>
