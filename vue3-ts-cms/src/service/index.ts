// service统一出口
import chenRequest from "@/service/request/index"
export default new chenRequest({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: process.env.VUE_APP_TIME_OUT,
    interceptors: {
        requestInterceptor: (config) => {
            // 携带token的拦截
            const token = "" //一般从vuex获取
            if (token) {
                if (!config?.headers) {
                    throw new Error("headers有可能为undefinedi")
                }
                config.headers.Authorization = `Bearer ${token}`
            }

            console.log("所有axios实例请求成功的拦截")
            return config
        },
        requestInterceptorCatch(err) {
            console.log("所有axios实例请求err的拦截")
            return err
        },
        responseInterceptor: (res) => {
            console.log("所有axios实例响应成功的拦截")
            return res
        },
        responseInterceptorCatch(err) {
            console.log("所有axios实例响应err的拦截")
            return err
        }
    }
})
