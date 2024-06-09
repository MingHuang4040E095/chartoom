<template>
  <a
    v-bind="$attrs"
    class="text-primary-100 font-size-4 border-none cursor-pointer hover:underline"
  >
    <slot></slot>
  </a>
</template>
