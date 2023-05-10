import { createStore, Store, useStore as useVuexStore } from "vuex"
// 导入类型
import { IRootState, IStoreType } from "@/store/types"
// 其他模块导入
import loginModule from "@/store/login/login"
import systemModule from "./main/system/system"

const store = createStore<IRootState>({
    modules: {
        login: loginModule,
        system: systemModule
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

// 封装一个函数解决用户直接访问main
export function setupStore() {
    store.dispatch("login/loadLocalLogin")
}

// 处理vuex和ts不兼容，无法识别子模块类型
export function useStore(): Store<IStoreType> {
    return useVuexStore()
}

export default store
