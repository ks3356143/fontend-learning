import { Module } from "vuex"
import { IRootState } from "@/store/types"
import { ISystemState } from "@/store/main/system/types"
import { getPageListData } from "@/service/main/system/system"
//泛型需要传入state里面有的数据，以及root里面数据
const systemModule: Module<ISystemState, IRootState> = {
    namespaced: true,
    state: () => {
        return {
            userList: [],
            userCount: 0
        }
    },
    mutations: {
        changeUserList(state: any, userList: any[]) {
            state.userList = userList
        },
        changeUserCount(state: any, userCount: number) {
            state.userCount = userCount
        }
    },
    actions: {
        async getPageList({ commit }, payload: any) {
            // 1.对页面发送请求
            const pageResult: any = await getPageListData(payload.pageUrl, payload.queryInfo)
            const { list, totalCount } = pageResult.data
            commit("changeUserList", list)
            commit("changeUserCount", totalCount)
        }
    }
}

export default systemModule
