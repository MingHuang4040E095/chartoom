<script setup>
import { computed, defineProps, inject, provide, reactive } from 'vue'

const props = defineProps({
  // 欄位名稱
  filedName: {
    type: String,
    required: true,
  },
})

// 儲存form底下的欄位
const formFields = inject('formFields')
const fieldKey = Symbol('fieldKey') // 欄位key (使用Symbol當唯一值)
provide('fieldKey', fieldKey)

// 驗證規則
const rules = inject('rules')

// 當前欄位的驗證規則
const currentFieldRules = computed(() => {
  // 預設驗證規則
  const ruleDefault = {
    message: '不得為空', // 錯誤訊息
    trigger: ['blur', 'change'], // 觸發時機 blur:失焦 focus:聚焦 change:值改變
  }
  // 沒有設定驗證規則時使用預設驗證
  const rule = rules[props.filedName]
    ? { ...rules[props.filedName] }
    : ruleDefault

  if (!('validator' in rule)) {
    // 沒有設定自訂驗證，就自動添加
    rule.validator = (value) => {
      if (!value) throw new Error('不得為空')
      return true
    }
  }

  return rule
})

// 設定當前欄位
const setCurrentField = () => {
  formFields[fieldKey] = {
    value: '',
    triggerCallback: async (type = '', value = '') => {
      // return {}
      const trigger = currentFieldRules.value.trigger
      if (trigger.includes(type)) {
        // 如果有符合觸發時機，就執行驗證
        console.log('驗證', value)
        await verifyField(currentFieldRules.value.validator, value)
      }
    },
  }
}
setCurrentField()

// 驗證結果
const verifyResult = reactive({
  status: true, // 驗證狀態 true:通過 false:失敗
  errorMessage: '', // 錯誤訊息
})

/**
 * 驗證欄位
 * @param {[Function]} callback  自定義驗證方法
 * @param {[Any]} value 欄位值
 */
const verifyField = async (callback = () => {}, value) => {
  try {
    verifyResult.status = await callback(value)
    verifyResult.errorMessage = ''
    return true
  } catch (err) {
    console.error(err)
    verifyResult.status = false
    verifyResult.errorMessage = err.message
    return false
  }
}

// 驗證錯誤時加上class
const formItemClass = computed(() => {
  return verifyResult.status ? '' : 'form-item--error'
})
</script>
<template>
  <div :class="[formItemClass]">
    <slot></slot>
    <div
      v-if="!verifyResult.status"
      class="font-size-3 color-red-dark pl-4 py-1"
    >
      {{ verifyResult.errorMessage }}
    </div>
  </div>
</template>
