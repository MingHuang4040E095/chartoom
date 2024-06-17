<script setup></script>
<template>
  <div class="dividing-line py-4">
    <span class="dividing-line__content px-4">
      <slot></slot>
    </span>
  </div>
</template>
<style lang="scss" scoped>
.dividing-line {
  @apply flex items-center justify-center relative text-primary-200;
  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    @apply bg-primary-100 flex-shrink-1 flex-grow-1;
  }

  .dividing-line__content {
    @apply inline-block flex-shrink-0 flex-grow-0;
  }
}
</style>
