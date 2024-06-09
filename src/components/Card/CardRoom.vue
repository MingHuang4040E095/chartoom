<script setup>
import ButtonBasic from '@/components/Button/ButtonBasic.vue' // 基礎按鈕樣式
import CardBasic from '@/components/Card/CardBasic.vue' // 基礎卡片樣式

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
  // 聊天室
  introduce: {
    type: String,
    default: '內容', // 限制最多30字
    validator: (value) => {
      return value.length <= 30
    },
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
  <CardBasic>
    <h2 class="text-primary-100 px-6">{{ props.title }}</h2>
    <div class="card__introduce text-primary-200 font-size-4 px-6">
      <!-- {{ props.introduce }} -->
      {{ props.introduce }}
    </div>
    <div class="text-right mt-auto px-6 py-4">
      <ButtonBasic type="round" @click="joinRoom(props.id)">加入</ButtonBasic>
    </div>
  </CardBasic>
</template>
<style lang="scss" scoped>
.card {
  min-width: 200px;
  .card__introduce {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    // flex-basis: 100%;
    -webkit-box-orient: vertical;
  }
}
</style>
