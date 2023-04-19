import { createApp } from "vue"
import "normalize.css"
import "@/assets/css/index.less"
import App from "@/App.vue"
import router from "@/router/index"
import store from "@/store/index"
createApp(App).use(router).use(store).mount("#app")

import chenRequest from "@/service"
interface DataType {
    data: any
    returnCode: string
    success: boolean
}

chenRequest
    .get<DataType>({
        url: "/home/multidata",
        showLoading: true //可以觉得现实LOADING或者不显示
    })
    .then((res) => {
        console.log("获取返回的data：", res.data)
        console.log("获取axios返回的returnCode：", res.returnCode)
        console.log("获取axios返回的success字段：", res.success)
    })
