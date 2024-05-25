<script setup></script>
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
      <header
        class="flex justify-between items-center bg-secondary-200 w-full px-10 py-4"
      >
        <div class="logo text-primary-200 font-size-6">logo</div>
        <nav
          class="flex gap-4 text-primary-200 font-size-4 [&>div]:cursor-pointer"
        >
          <div>message</div>
          <div>userName</div>
          <div>setting</div>
          <div>登入</div>
          <div>註冊</div>
        </nav>
      </header>
      <body
        class="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
      >
        <div
          v-for="i in 16"
          :key="i"
          class="card flex flex-col bg-secondary-200 rounded-1 aspect-ratio-video tracking-widest"
        >
          <h2 class="text-primary-100 px-6">聊天室1</h2>
          <div class="text-primary-200 font-size-4 px-6">
            我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容
          </div>
          <div class="text-right mt-auto px-6 py-4">
            <button
              class="text-white bg-primary-100 rounded-8 border-none px-4 py-2 tracking-widest cursor-pointer hover:bg-primary-200 transition-all duration-300 ease-in-out"
            >
              加入
            </button>
          </div>
        </div>
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
