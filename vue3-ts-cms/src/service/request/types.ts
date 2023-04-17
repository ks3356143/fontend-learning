import type { AxiosRequestConfig } from "axios"
export interface chenRequestInterceptor {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestInterceptorCatch?: (error: any) => any
    responseInterceptor?: (config: any) => any
    responseInterceptorCatch?: (error: any) => any
}
// 这个接口让别人传入interceptors
export interface ChenRequestConfig extends AxiosRequestConfig {
    interceptors?: chenRequestInterceptor
    showLoading?: boolean
}
