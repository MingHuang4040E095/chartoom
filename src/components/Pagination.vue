<script setup></script>
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
