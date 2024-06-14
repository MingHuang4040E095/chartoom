<script setup>
import { computed, defineProps, inject, provide } from 'vue'

const props = defineProps({
  // 欄位名稱
  filedName: {
    type: String,
    required: true,
  },
  // 觸發時機
  trigger: {
    type: Array,
    default: () => {
      return ['blur', 'focus', 'change'] // blur:失焦 focus:聚焦 change:值改變
    },
  },
})

// 儲存底下的formItem欄位
const formItemFields = inject('formFields')
const fieldKey = Symbol('fieldKey') // 欄位key (使用Symbol當唯一值)
provide('fieldKey', fieldKey)

// 驗證規則
const rules = inject('rules')

// 當前欄位的驗證規則
const currentFieldRules = computed(() => {
  // 預設驗證規則
  const ruleDefault = {
    message: '不得為空',
    trigger: props.trigger,
    validator: verifyDefault(formItemFields[fieldKey]),
  }

  // 沒有設定驗證規則時使用預設驗證
  return rules[props.fieldKey] || ruleDefault
})

/**
 * 預設驗證(只判斷是否有值)
 * @param {[Any]} value 欄位的值
 * @return {[Boolean]} true:驗證成功  false:驗證失敗
 */
const verifyDefault = (value) => {
  return !!value
}

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
