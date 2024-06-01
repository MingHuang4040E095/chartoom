<script>
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
})
</script>
<template>
  <div class="basic-input">
    <input class="" :type="props.type" />
  </div>
</template>
