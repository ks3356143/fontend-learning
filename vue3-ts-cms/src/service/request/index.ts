import axios from "axios"
import type { AxiosInstance } from "axios"
import type { chenRequestInterceptor, ChenRequestConfig } from "@/service/request/types"
import { ElLoading } from "element-plus"

// 按需引入有bug，需要css
import "element-plus/theme-chalk/el-loading.css"

class chenRequest {
    instance: AxiosInstance
    interceptors?: chenRequestInterceptor
    showLoading: boolean
    loading?: any
    constructor(config: ChenRequestConfig) {
        // 创建axios实例
        this.instance = axios.create(config)
        // 保存基本信息
        this.interceptors = config.interceptors
        this.showLoading = config.showLoading ?? true

        // 使用拦截器
        // 1.从config中取出拦截去时对应的实力拦截器
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )
        // 2.添加所有实例都拦截
        this.instance.interceptors.request.use(
            (config) => {
                console.log("所有实例请求成功均要拦截")
                if (this.showLoading) {
                    this.loading = ElLoading.service({
                        lock: true, //需要蒙板不？
                        text: "正在请求数据...",
                        background: "rgba(0,0,0,0.5)"
                    })
                }

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
                //延迟下观看
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

    request<T>(config: ChenRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            // 单个请求对config的处理
            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config)
            }

            // 判断是否显示LOADING
            if (config.showLoading === false) {
                this.showLoading = config.showLoading
            }

            this.instance
                .request<any, T>(config)
                .then((res) => {
                    // 1.单个请求对数据的处理
                    if (config.interceptors?.responseInterceptor) {
                        res = config.interceptors.responseInterceptor(res)
                    }
                    // 2.注意每次穿过来showLoading需要初始化，不然下次请求就嗝屁没LOADINGs了
                    this.showLoading = true

                    // 3.将我们结果resolve返回出去
                    resolve(res)
                })
                .catch((err) => {
                    this.showLoading = true
                    reject(err)
                })
        })
    }

    get<T>(config: ChenRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: "GET" })
    }
    post<T>(config: ChenRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: "POST" })
    }
    delete<T>(config: ChenRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: "DELETE" })
    }
    patch<T>(config: ChenRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: "PATCH" })
    }
}

export default chenRequest
