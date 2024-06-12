<script setup>
import { provide, reactive } from 'vue'

// 儲存底下的formItem欄位
const formItemFields = reactive({})

provide('formFields', formItemFields)

const verify = () => {
  const properties = Object.getOwnPropertySymbols(formItemFields)
  // 屬性跑回圈取值
  properties.forEach((property) => {
    console.log('property:', property)
    console.log('value:', formItemFields[property])
  })
}
</script>
<template>
  <form v-bind="$attrs">
    <slot></slot>

    <div>{{ formItemFields }}</div>
    <button @click.prevent="verify">click</button>
  </form>
</template>
