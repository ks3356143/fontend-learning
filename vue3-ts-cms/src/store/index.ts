import { createStore } from "vuex"
// 导入类型
import { IRootState } from "@/store/types"
// 其他模块导入
import loginModule from "@/store/login/login"

const store = createStore<IRootState>({
    modules: {
        login: loginModule
    },
    state() {
        return {
            name: "陈俊亦",
            age: 18
        }
    },
    getters: {},
    mutations: {},
    actions: {}
})

export default store
