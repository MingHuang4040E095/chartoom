<script setup>
// 分頁
/**
 * 1.如果中間頁數低等於5頁，則不用顯示箭頭
 * 中間頁數: 去掉頭尾頁數後的頁數
 * ex: 1  2  3  全部3頁，中間頁數只有1頁(2)
 * ex: 1  2  3  4  5  6 全部6頁，中間頁數只有3頁(2 3 4 5)
 * ex: 1  2  3  4  5  6 7 全部7頁，中間頁數只有5頁(2 3 4 5 6)
 *
 * 2.如果中間頁數高於5頁，則顯示箭頭
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
