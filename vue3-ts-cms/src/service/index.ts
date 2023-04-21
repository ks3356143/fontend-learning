// service统一出口，用来创建我们封装的axios实例并传入默认参数和拦截器
import chenRequest from "@/service/request/index"
export default new chenRequest({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: process.env.VUE_APP_TIME_OUT,
    interceptors: {
        requestInterceptor: (config) => {
            // 携带token的拦截，一般从vuex获取
            const token = ""
            if (token) {
                if (!config?.headers) {
                    throw new Error("headers有可能为undefinedi")
                }
                config.headers.Authorization = `Bearer ${token}`
            }

            // 所有axios实例请求成功的拦截
            return config
        },
        requestInterceptorCatch(err) {
            // "所有axios实例请求err的拦截"
            return err
        },
        responseInterceptor: (res) => {
            // "所有axios实例响应成功的拦截"
            return res
        },
        responseInterceptorCatch(err) {
            // "所有axios实例响应err的拦截"
            return err
        }
    }
})
