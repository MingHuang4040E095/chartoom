<script setup>
import { defineProps, inject, provide } from 'vue'

// 儲存底下的formItem欄位
const formItemFields = inject('formFields')
const fieldKey = Symbol('fieldKey') // 欄位key (使用Symbol當唯一值)
provide('fieldKey', fieldKey)
// formItemFields[currentField] =

const props = defineProps({
  // 欄位名稱
  filedName: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div>
    <slot></slot>
  </div>
</template>
