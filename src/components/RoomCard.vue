<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  // 聊天室id
  id: {
    type: [String, Number],
    default: null,
  },
  // 聊天室標題
  title: {
    type: String,
    default: '標題',
  },
  // 聊天室內容
  content: {
    type: String,
    default: '內容',
  },
})

const emit = defineEmits(['joinRoom'])

/**
 * 加入聊天室
 * @param {[String,Number]} id 聊天室id
 */
const joinRoom = (id) => {
  console.log('join room', id)

  emit('joinRoom', id)
}
</script>
<template>
  <div
    class="card flex flex-col bg-secondary-200 rounded-1 aspect-ratio-video tracking-widest"
  >
    <h2 class="text-primary-100 px-6">{{ props.title }}</h2>
    <div class="text-primary-200 font-size-4 px-6">
      {{ props.content }}
    </div>
    <div class="text-right mt-auto px-6 py-4">
      <button
        class="text-white bg-primary-100 rounded-8 border-none px-4 py-2 tracking-widest cursor-pointer hover:bg-primary-200 transition-all duration-300 ease-in-out"
        @click="joinRoom(props.id)"
      >
        加入
      </button>
    </div>
  </div>
</template>
