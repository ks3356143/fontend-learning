import axios from "axios"
import type { AxiosInstance } from "axios"
import type { chenRequestInterceptor, ChenRequestConfig } from "@/service/request/types"

class chenRequest {
    instance: AxiosInstance
    interceptors?: chenRequestInterceptor
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
        // 添加所有实例都拦截不会被单独顶替
        this.instance.interceptors.request.use(
            (config) => {
                console.log("所有实例请求成功均要拦截，不会被替换")
                return config
            },
            (err) => {
                console.log("所有实例请求错误拦截，不会被替换")
                return err
            }
        )
        this.instance.interceptors.response.use(
            (res) => {
                console.log("所有实例响应成功均要拦截，不会被替换")
                return res
            },
            (err) => {
                console.log("所有实例响应错误拦截，不会被替换")
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
