import { Module } from "vuex"
// 导入类型
import { ILoginState } from "@/store/login/types"
import { IRootState } from "@/store/types"
// 导入login的请求函数accountLoginRequest,第二个导入拿到IAcount类型
import type { IAccount } from "@/service/login/types"
import { accountLoginRequest, requestUserInfoById } from "@/service/login/login"
import localCache from "@/utils/cache"
import router from "@/router"
// 两个泛型参数，第一个是state类型，第二个是根模块类型
const loginModule: Module<ILoginState, IRootState> = {
    namespaced: true,
    state() {
        return {
            token: "",
            userInfo: ""
        }
    },
    mutations: {
        changeToken(state, token: string) {
            state.token = token
        },
        changeUserInfo(state, userInfo: any) {
            state.userInfo = userInfo
        }
    },
    getters: {},
    actions: {
        async accountLoginAction(context, payload: IAccount) {
            // 1.实现请求逻辑
            const loginResult = await accountLoginRequest(payload)
            const { id, token } = loginResult.data
            context.commit("changeTolen", token)
            localCache.setCache("token", token) //储存拿到的token到localCache
            // 2.请求用户信息数据
            const userInfoResult = await requestUserInfoById(id)
            const userInfo = userInfoResult.data
            context.commit("changeUserInfo", userInfo)
            localCache.setCache("userInfo", userInfo)
            // 3.请求用户菜单！（暂时没做）
            // 4.跳转首页
            router.push("/main")
        },
        loadLocalLogin({ commit }) {
            const token = localCache.getCache("token")
            if (token) {
                commit("changeToken", token)
            }
            const userInfo = localCache.getCache("userInfo")
            if (userInfo) {
                commit("changeUserInfo", userInfo)
            }
        },
        phoneLoginAction(context, payload: any) {
            console.log("执行accountLoginAction,传入的账号和密码为：", payload)
        }
    }
}

export default loginModule
