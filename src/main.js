import '@unocss/reset/sanitize/assets.css'
import '@unocss/reset/sanitize/sanitize.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './style.css'
createApp(App).use(router).mount('#app')
