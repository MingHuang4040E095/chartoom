<script setup>
// 首頁
import CardRoom from '@/components/Card/CardRoom.vue'
import Dialog from '@/components/Feedback/Dialog.vue'
import Pagination from '@/components/Pagination.vue'
import { reactive, ref } from 'vue'

const cardRoomData = ref([])

// 分頁相關資料
const paginationData = reactive({
  currentPage: 1, // 當前頁數
  perPage: 16, // 一頁顯示幾筆
  total: 33, // 總筆數
})
</script>
<template>
  <!-- 側邊欄 -->
  <!-- <aside class="the-aside bg-secondary-200 max-w-lg w-full h-screen p-10">
                <h1 class="text-primary-200 font-size-12 font-bold text-center">MH聊天室</h1>

                <form>
                    <div>
                        <input class="w-full border-b-2px border-primary-200 border-t-none border-l-none border-r-none bg-secondary-200 font-size-6 py-2 text-primary-200 focus:outline-none" type="text">
                    </div>
                </form>
            </aside> -->
  <section
    class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 gap-4 lg:gap-8"
  >
    <CardRoom v-for="i in 16" :key="i" />
  </section>
  <Dialog>123</Dialog>
  <Pagination
    v-model="paginationData.currentPage"
    :total="paginationData.total"
    :perPage="paginationData.perPage"
  />
</template>
<style lang="scss">
// .the-header{
//     box-shadow: 2px 2px 4px #000000b9 inset;
//     background-color: #ffffff;
//     padding: 16px 32px;
// }
// body {
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
// }
</style>
