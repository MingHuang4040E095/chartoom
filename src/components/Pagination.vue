<script setup>
// 分頁
/**
 * 規則 :
 * 扣掉頭尾頁數後，中間頁數只會顯示5頁
 * 如果當前在第一頁，會顯示 1 + 中間5頁
 * 如果在最後一頁，會顯示 中間5頁 + 最後一頁
 *
 * 1.如果中間頁數低等於5頁，則不用顯示箭頭
 * 中間頁數: 去掉頭尾頁數後的頁數
 * ex: 全部3頁，中間頁數只有1頁(2)
 *     [1]  (2)  [3]
 * ex: 全部6頁，中間頁數只有3頁(2 3 4 5)
 *     [1]  (2  3  4  5)  [6]
 * ex: 全部7頁，中間頁數只有5頁(2 3 4 5 6)
 *     [1]  (2  3  4  5  6) [7]
 *
 * 2.如果中間頁數高於5頁，根據當前在哪一頁，則顯示對應箭頭
 * ex: 有8頁，當前在第4頁，所以前後2頁會顯示，其他會隱藏
 *     [1]  (2  3  "4"  5  6)  >  [8]
 * ex: 有11頁，當前頁數在第8頁，所以前後2頁會顯示，其他會隱藏
 *     [1] < (6  7 "8"  9  10)  [11]
 * ex: 有9頁，當前頁數在第1頁，但是前面沒有數字了，中間頁數可以顯示5頁，其他會隱藏
 *     ["1"]  (2  3  4  5  6 ) > [9]
 * ex: 有11頁，當前頁數在第7頁
 *    [1] < (5  6  "7"  8  9) > [11]
 */
</script>
<template>
  <div class="pagination">
    <button class="pagination__btn">
      <div class="i-ic:round-arrow-back-ios w-1em h-1em"></div>
    </button>
    <button class="pagination__btn" v-for="i in 12" :key="i">
      {{ i }}
    </button>
    <button class="pagination__btn">
      <div class="i-ic:round-arrow-forward-ios w-1em h-1em"></div>
    </button>
  </div>
</template>
<style lang="scss" scoped>
.pagination {
  @apply flex justify-center items-center gap-1;
  > .pagination__btn {
    @apply w-auto border-none bg-transparent text-primary-100 font-size-6 cursor-pointer transition-all duration-300 ease-in-out rounded-full;
  }
}
</style>
