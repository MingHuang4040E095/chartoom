<script setup>
import { defineProps, onMounted, provide, reactive } from 'vue'

// 儲存底下的formItem欄位
const formItemFields = reactive({})

provide('formFields', formItemFields)

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
        // '欄位名稱': [
        //   {
        //     required: true,
        //     message: '請輸入欄位名稱',
        //     trigger: 'blur',
        //     trigger: ['blur', 'change'],
        //   }
        // ]
      }
    },
  },
})

// 驗證表單
const verify = () => {
  const properties = Object.getOwnPropertySymbols(formItemFields)
  // 屬性跑回圈取值
  properties.forEach((property) => {
    console.log('property:', property)
    console.log('value:', formItemFields[property])
  })
}

onMounted(() => {})
</script>
<template>
  <form v-bind="$attrs">
    <slot></slot>

    <div>{{ formItemFields }}</div>
    <button @click.prevent="verify">click</button>
  </form>
</template>
