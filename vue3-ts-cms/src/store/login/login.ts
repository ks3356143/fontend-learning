import { Module } from "vuex"
// 导入类型
import { ILoginState } from "@/store/login/types"
import { IRootState } from "@/store/types"
// 导入login的请求函数accountLoginRequest,第二个导入拿到IAcount类型
import type { IAccount } from "@/service/login/types"
import { accountLoginRequest } from "@/service/login/login"
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
        changeTolen(state, token: string) {
            state.token = token
        }
    },
    getters: {},
    actions: {
        async accountLoginAction(context, payload: IAccount) {
            // 1.实现请求逻辑
            const loginResult: any = await accountLoginRequest(payload)
            // 2.获取data
            const { id, token } = loginResult.data
            context.commit("changeTolen", token)
        },
        phoneLoginAction(context, payload: any) {
            console.log("执行accountLoginAction,传入的账号和密码为：", payload)
        }
    }
}

export default loginModule
