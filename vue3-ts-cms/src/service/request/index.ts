import axios from "axios"
import type { AxiosInstance } from "axios"
import type { chenRequestInterceptor, ChenRequestConfig } from "@/service/request/types"
// 从ElementPlus引入ElLoading对象，其中有自定义指令和server方式调用
import { ElLoading } from "element-plus"
import "element-plus/theme-chalk/el-loading.css"

class chenRequest {
    instance: AxiosInstance
    interceptors?: chenRequestInterceptor
    showLoading: boolean
    loading?: any
    constructor(config: ChenRequestConfig) {
        this.instance = axios.create(config)
        // 保存实例拦截器信息
        this.interceptors = config.interceptors
        // 保存调用是否需要转圈
        this.showLoading = config.showLoading ?? true

        // 使用拦截器
        // 1.从config中取出拦截去时对应的实例拦截器
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )
        // 2.添加所有实例-全局都拦截
        this.instance.interceptors.request.use(
            (config) => {
                // 所有实例请求成功均要拦截
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
                // 所有实例请求错误拦截
                return err
            }
        )
        this.instance.interceptors.response.use(
            (res) => {
                // 所有实例响应成功均要拦截
                //延迟下观看
                this.loading?.close()
                const data = res.data
                // 这里可以处理returnCode
                return data
            },
            (err) => {
                // 所有实例响应错误拦截
                if (err.response.status === "404") {
                    console.log("404错误")
                }
                return err
            }
        )
    }

    request<T = any>(config: ChenRequestConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            // 对请求中传参的拦截器进行单独拦截
            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config)
            }

            // 判断是否显示LOADING，默认为true，如果传参false则改为false
            if (config.showLoading === false) {
                this.showLoading = config.showLoading
            }

            this.instance
                .request<any, T>(config)
                .then((res) => {
                    // 1.单独调用是的拦截器处理
                    if (config.interceptors?.responseInterceptor) {
                        res = config.interceptors.responseInterceptor(res)
                    }
                    // 2.注意每次传过来showLoading需要初始化，不然下次请求就嗝屁没LOADING了
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

    get<T = any>(config: ChenRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: "GET" })
    }
    post<T = any>(config: ChenRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: "POST" })
    }
    delete<T = any>(config: ChenRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: "DELETE" })
    }
    patch<T = any>(config: ChenRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: "PATCH" })
    }
}

export default chenRequest
