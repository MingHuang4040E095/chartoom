<script setup>
import { defineModel } from 'vue'
import IconCancel from '../Icon/IconCancel.vue'
const props = defineProps({
  // 輸入框類型
  type: {
    type: String,
    default: 'text',
  },
})

const value = defineModel({
  default: '',
  type: [String, Number],
})
</script>
<template>
  <div class="basic-input relative">
    <input
      class="font-size-4 tracking-2px text-primary-100 w-full rounded-12 outline-none px-4 py-2 pr-8"
      border="2px solid primary-100"
      :type="props.type"
      v-model="value"
      v-bind="$attrs"
    />
    <IconCancel
      class="absolute top-1/2 right-3 -transform-translate-y-1/2 text-primary-100 cursor-pointer"
    />
  </div>
</template>
