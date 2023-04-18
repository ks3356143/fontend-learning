import type { AxiosRequestConfig, AxiosResponse } from "axios"

// 定义一个对象，该对象放4个拦截器的函数
export interface chenRequestInterceptor<T = AxiosResponse> {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestInterceptorCatch?: (error: any) => any
    responseInterceptor?: (res: T) => T
    responseInterceptorCatch?: (error: any) => any
}
// 扩展axios-config的类型，扩展包括拦截器
export interface ChenRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: chenRequestInterceptor<T>
    showLoading?: boolean
}
