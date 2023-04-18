import { createApp } from "vue"
// 如果需要全局导入elementPlus则可取消以下两行注释
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"
import App from "@/App.vue"
import router from "@/router/index"
import store from "@/store/index"
createApp(App).use(router).use(store).mount("#app")

// 以下是配置单独拦截器，共两个，注释代码为例示
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

// DataType用来定义返回数据的res<DataType>格式
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
