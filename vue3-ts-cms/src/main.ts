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
//注册我们自己写的属性
import { registerProperties } from "@/global/registerProptires"
//该函数必须要在use(router)前面才能注册
setupStore()
const app = createApp(App)
app.use(router)
app.use(store)
app.use(registerProperties)
app.mount("#app")
