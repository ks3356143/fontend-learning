import { createApp } from "vue"
import "normalize.css"
import "@/assets/css/index.less"
import App from "@/App.vue"
import router from "@/router/index"
import store from "@/store/index"
//引用animate动画
import "animate.css"
//拿到用户直接访问main的
import { setupStore } from "@/store/index"
setupStore()
createApp(App).use(router).use(store).mount("#app")
