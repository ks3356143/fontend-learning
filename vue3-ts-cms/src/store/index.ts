import { createStore, Store, useStore as useVuexStore } from "vuex"
// 导入类型
import { IRootState, IStoreType } from "@/store/types"
// 其他模块导入
import loginModule from "@/store/login/login"
import systemModule from "./main/system/system"
import dashboardModule from "./analysis/dashboard"
// 拿到网络请求封装
import { getPageListData } from "@/service/main/system/system"

const store = createStore<IRootState>({
    modules: {
        login: loginModule,
        system: systemModule,
        dashboard: dashboardModule
    },
    state() {
        return {
            entireDepartment: [],
            entireRole: []
        }
    },
    getters: {},
    mutations: {
        changeEntireDepartment(state, list) {
            state.entireDepartment = list
        },
        changeEntireRole(state, list) {
            state.entireRole = list
        }
    },
    actions: {
        async getInitial({ commit }) {
            // 1.请求部门和角色数据
            const departmentResult = await getPageListData("/api/department/list", { offset: 0, size: 1000 })
            const roleResult = await getPageListData("/api/role/list", { offset: 0, size: 1000 })

            // 2.保存数据
            commit("changeEntireDepartment", departmentResult.data.list)
            commit("changeEntireRole", roleResult.data.list)
        }
    }
})

// 封装一个函数解决用户直接访问main
export function setupStore() {
    store.dispatch("login/loadLocalLogin")
    // 初始化角色和部门数据
    store.dispatch("getInitial")
}

// 处理vuex和ts不兼容，无法识别子模块类型
export function useStore(): Store<IStoreType> {
    return useVuexStore()
}

export default store
