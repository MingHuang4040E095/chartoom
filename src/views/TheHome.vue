<script setup>
import RoomCard from '@/components/RoomCard.vue'
</script>
<template>
  <section>
    <container>
      <!-- 側邊欄 -->
      <!-- <aside class="the-aside bg-secondary-200 max-w-lg w-full h-screen p-10">
                <h1 class="text-primary-200 font-size-12 font-bold text-center">MH聊天室</h1>

                <form>
                    <div>
                        <input class="w-full border-b-2px border-primary-200 border-t-none border-l-none border-r-none bg-secondary-200 font-size-6 py-2 text-primary-200 focus:outline-none" type="text">
                    </div>
                </form>
            </aside> -->
      <body
        class="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
      >
        <RoomCard v-for="i in 16" :key="i" />
      </body>
    </container>
  </section>
</template>
<style lang="scss">
// .the-header{
//     box-shadow: 2px 2px 4px #000000b9 inset;
//     background-color: #ffffff;
//     padding: 16px 32px;
// }
</style>
