import { Module } from "vuex"
import type { IRootState } from "@/store/types"
import type { ISystemState } from "@/store/main/system/types"
import { getPageListData } from "@/service/main/system/system"
import _ from "lodash"
// 泛型需要传入state里面有的数据，以及root里面数据
const systemModule: Module<ISystemState, IRootState> = {
    namespaced: true,
    state: () => {
        return {
            userList: [],
            userCount: 0,
            roleList: [],
            roleCount: 0
        }
    },
    mutations: {
        changeUserList(state: any, userList: any[]) {
            state.userList = userList
        },
        changeUserCount(state: any, userCount: number) {
            state.userCount = userCount
        },
        changeRoleList(state: any, roleList: any[]) {
            state.userList = roleList
        },
        changeRoleCount(state: any, roleCount: number) {
            state.userCount = roleCount
        }
    },
    actions: {
        async getPageList({ commit }, payload: any) {
            // 1.获取url
            const pageName = payload.pageName
            let pageUrl = ""
            switch (pageName) {
                // 根据不同pageName变为pageUrl
                case "user":
                    pageUrl = "api/user/list"
                    break
                case "role":
                    pageUrl = "api/role/list"
                    break
            }
            // 2.对页面发送请求
            const pageResult: any = await getPageListData(pageUrl, payload.queryInfo)

            // 3.将数据存储到state中
            const { list, totalCount } = pageResult.data
            commit(`change${_.capitalize(pageName)}List`, list)
            commit(`change${_.capitalize(pageName)}Count`, totalCount)
        }
    }
}

export default systemModule
