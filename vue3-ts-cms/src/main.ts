import { createApp } from "vue"

// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"
import App from "@/App.vue"
import router from "@/router/index"
import store from "@/store/index"
createApp(App).use(router).use(store).mount("#app")

// 简单使用封装
import chenRequest from "@/service"
// chenRequest.request({
//     url: "/home/multidata",
//     method: "GET",
//     interceptors: {
//         requestInterceptor: (config) => {
//             console.log("单独的请求config")
//             return config
//         },
//         responseInterceptor: (res) => {
//             console.log("单独响应的response")
//             return res
//         }
//     }
// })
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
        console.log(res.data)
        console.log(res.returnCode)
        console.log(res.success)
    })
