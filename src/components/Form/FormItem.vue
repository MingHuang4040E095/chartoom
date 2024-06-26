<script setup>
import { computed, defineProps, inject, provide, reactive } from 'vue'
// -- 組件 --
import TipText from '@/components/Feedback/TipText.vue' // 文字提示
const props = defineProps({
  // 標籤
  label: {
    type: String,
    default: '',
  },
  // 欄位名稱
  filedName: {
    type: String,
    required: true,
    default: '',
  },
})

// 儲存form底下的欄位
const formFields = inject('formFields', {})
const fieldKey = Symbol('fieldKey') // 欄位key (使用Symbol當唯一值)
provide('fieldKey', fieldKey)

// 驗證規則
const rules = inject('rules', {})

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
    value: '', // 欄位值
    /**
     * 觸發驗證
     * @param {[String]} type 觸發時機 blur:失焦 focus:聚焦 change:值改變 direct:直接驗證
     */
    triggerCallback: async (type = '', value = '') => {
      const trigger = currentFieldRules.value.trigger
      if (trigger.includes(type) || type === 'direct') {
        // 如果有符合觸發時機，就執行驗證
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
    console.warn(err)
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
  <div class="form-item" :class="[formItemClass]">
    <label
      v-if="props.label"
      class="block font-size-6 font-bold text-primary-100 mb-2"
      for="email"
      >{{ props.label }}</label
    >
    <!-- 文字提示 -->
    <TipText :visible="!verifyResult.status" :text="verifyResult.errorMessage">
      <div>
        <slot></slot>
      </div>
    </TipText>
  </div>
</template>
<style lang="scss" scoped>
.form-item + .form-item {
  @apply mt-5;
}
</style>
