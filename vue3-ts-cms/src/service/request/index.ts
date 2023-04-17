import axios from "axios"
import type { AxiosInstance } from "axios"
import type { chenRequestInterceptor, ChenRequestConfig } from "@/service/request/types"
import { ElLoading } from "element-plus"

//按需引入有bug，需要css
import "element-plus/theme-chalk/el-loading.css"

class chenRequest {
    instance: AxiosInstance
    interceptors?: chenRequestInterceptor
    loading?: any
    constructor(config: ChenRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors = config.interceptors
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )
        // 添加所有实例都拦截
        this.instance.interceptors.request.use(
            (config) => {
                console.log("所有实例请求成功均要拦截")
                this.loading = ElLoading.service({
                    lock: true, //需要蒙板不？
                    text: "正在请求数据...",
                    background: "rgba(0,0,0,0.5)"
                })
                return config
            },
            (err) => {
                console.log("所有实例请求错误拦截")
                return err
            }
        )
        this.instance.interceptors.response.use(
            (res) => {
                console.log("所有实例响应成功均要拦截")
                this.loading?.close()
                const data = res.data
                if (data.returnCode === "-1001") {
                    console.log("-1001错误")
                } else {
                    return res.data
                }
            },
            (err) => {
                console.log("所有实例响应错误拦截")
                if (err.response.status === "404") {
                    console.log("404错误")
                }
                return err
            }
        )
    }

    request(config: ChenRequestConfig): void {
        // 转换config
        if (config.interceptors?.requestInterceptor) {
            config = config.interceptors.requestInterceptor(config)
        }

        this.instance.request(config).then((res) => {
            if (config.interceptors?.responseInterceptor) {
                res = config.interceptors.responseInterceptor(res)
            }
            console.log(res.data)
        })
    }
}

export default chenRequest
