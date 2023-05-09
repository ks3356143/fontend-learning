import { createApp } from "vue"
import "normalize.css"
import "@/assets/css/index.less"
import App from "@/App.vue"
import router from "@/router/index"
import store from "@/store/index"
//引用animate动画
import "animate.css"
//安装default插件
import "default-passive-events"
//拿到用户直接访问main的
import { setupStore } from "@/store/index"
//该函数必须要在use(router)前面才能注册
setupStore()
createApp(App).use(router).use(store).mount("#app")
