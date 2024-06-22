<script setup>
// 分頁
import { computed, defineModel, defineProps } from 'vue'

const props = defineProps({
  // 總筆數
  total: {
    type: Number,
    default: 11,
  },
  // 一頁顯示幾筆
  perPage: {
    type: Number,
    default: 1,
  },
})
// 總頁數
const totalPages = computed(() => {
  // 無條件進位
  return Math.ceil(props.total / props.perPage)
})
// 當前頁數
const currentPage = defineModel({
  default: 1,
  type: [Number],
})
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

const max = 5 // 顯示的最大數量
const displayMaxQuantity = max % 2 === 1 ? max : max - 1 // 要顯示的最大數量(奇數為主)

// 不需要箭頭的頁數
const noArrowPages = computed(() => {
  const range = Math.floor(displayMaxQuantity / 2) // 前後要各顯示幾頁 ex:最大顯示5頁，所以前後各顯示2頁
  // 當前頁面在以下範圍內 則沒有左邊箭頭
  const noArrowPagesLeft = {
    start: 1,
    end: displayMaxQuantity - range + 1,
    get pages () {
      return Array.from({ length: this.end }, (_, index) => {
        return index + 1
      })
    },
  }

  // 當前頁面在以下範圍內 則沒有右邊箭頭
  const noArrowPagesRight = {
    start: totalPages.value - displayMaxQuantity + range,
    end: totalPages.value,
    get pages () {
      return Array.from({ length: this.end - this.start + 1 }, (_, index) => {
        return this.start + index
      })
    },
  }
  return {
    left: noArrowPagesLeft, // 左邊
    right: noArrowPagesRight, // 右邊
  }
})

// 中間頁數(最多5筆)
const centerDisplayPages = computed(() => {
  const range = Math.floor(displayMaxQuantity / 2) // 前後要各顯示幾頁 ex:最大顯示5頁，所以前後各顯示2頁
  const noArrowPagesLeft = noArrowPages.value.left
  const noArrowPagesRight = noArrowPages.value.right
  const pages = []
  if (noArrowPagesLeft.pages.includes(currentPage.value)) {
    // 如果在左邊
    for (let page = 1; page <= displayMaxQuantity; page++) {
      pages.push(page + 1)
    }
  } else if (noArrowPagesRight.pages.includes(currentPage.value)) {
    // 如果在右邊
    for (
      let page = totalPages.value;
      page > totalPages.value - displayMaxQuantity;
      page--
    ) {
      pages.push(page - 1)
    }
    pages.reverse()
  } else {
    // 如果在中間
    const start = currentPage.value - range
    const end = currentPage.value + range
    for (let page = start; page <= end; page++) {
      pages.push(page)
    }
  }
  // 確保頁數不會超過總頁數
  return pages.filter((page) => {
    return page < totalPages.value && page > 1
  })
})

// 箭頭icon是否顯示
const iconArrowDisplay = computed(() => {
  // 中間頁數的第一筆是否相鄰1
  let isFirstPage = false
  if (centerDisplayPages.value[0]) {
    isFirstPage = centerDisplayPages.value[0] - 1 === 1
  }

  // 中間頁數的最後一筆是否相鄰最後一頁
  let isLastPage = false
  if (centerDisplayPages.value[centerDisplayPages.value.length - 1]) {
    isLastPage =
      centerDisplayPages.value[centerDisplayPages.value.length - 1] + 1 ===
      totalPages.value
  }
  return {
    previous:
      !noArrowPages.value.left.pages.includes(currentPage.value) &&
      !isFirstPage,
    next:
      !noArrowPages.value.right.pages.includes(currentPage.value) &&
      !isLastPage,
  }
})
</script>
<template>
  <pre>centerDisplayPages{{ centerDisplayPages }}</pre>
  <pre>noArrowPages{{ noArrowPages }}</pre>
  <div class="pagination">
    <!-- 第一頁 -->
    <button
      class="pagination__btn"
      :class="[currentPage === 1 ? 'active' : null]"
      @click.stop="currentPage = 1"
    >
      1
    </button>
    <button
      v-show="iconArrowDisplay.previous"
      class="pagination__btn"
      @click.stop="currentPage = currentPage - 1"
    >
      <div class="i-ic:round-arrow-back-ios w-1em h-1em"></div>
    </button>
    <!-- 中間頁數(最多5筆) -->
    <button
      class="pagination__btn"
      v-for="page in centerDisplayPages"
      :key="page"
      :class="[currentPage === page ? 'active' : null]"
      @click.stop="currentPage = page"
    >
      {{ page }}
    </button>
    <button
      v-show="iconArrowDisplay.next"
      class="pagination__btn"
      @click.stop="currentPage = currentPage + 1"
    >
      <div class="i-ic:round-arrow-forward-ios w-1em h-1em"></div>
    </button>
    <!-- 最後一頁 -->
    <button
      v-if="totalPages > 1"
      class="pagination__btn"
      :class="[currentPage === totalPages ? 'active' : null]"
      @click.stop="currentPage = totalPages"
    >
      {{ totalPages }}
    </button>
  </div>
</template>
<style lang="scss" scoped>
.pagination {
  @apply flex justify-center items-center gap-1;
  > .pagination__btn {
    @apply w-auto border-none bg-transparent text-primary-100 font-size-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 min-w-10 min-h-10 hover:underline;
  }
  > .pagination__btn.active {
    @apply bg-primary-100 text-secondary-100;
  }
}
</style>
