import { Module } from "vuex"
// 导入类型
import { ILoginState } from "@/store/login/types"
import { IRootState } from "@/store/types"
// 两个泛型参数，第一个是state类型，第二个是根模块类型
const loginModule: Module<ILoginState, IRootState> = {
    namespaced: true,
    state() {
        return {
            token: "",
            userInfo: ""
        }
    },
    mutations: {},
    getters: {},
    actions: {
        accountLoginAction(context, payload: any) {
            console.log("执行accountLoginAction,传入的账号和密码为：", payload)
        }
    }
}

export default loginModule
