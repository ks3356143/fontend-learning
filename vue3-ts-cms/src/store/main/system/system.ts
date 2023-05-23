import { Module } from "vuex"
import type { IRootState } from "@/store/types"
import type { ISystemState } from "@/store/main/system/types"
import { getPageListData, deletePageData } from "@/service/main/system/system"
import _ from "lodash"
// 泛型需要传入state里面有的数据，以及root里面数据
const systemModule: Module<ISystemState, IRootState> = {
    namespaced: true,
    state: () => {
        return {
            userList: [],
            userCount: 0,
            roleList: [],
            roleCount: 0,
            goodsList: [],
            goodsCount: 0,
            menuList: [],
            menuCount: 0
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
            state.roleList = roleList
        },
        changeRoleCount(state: any, roleCount: number) {
            state.roleCount = roleCount
        },
        changeGoodsList(state: any, goodsList: any[]) {
            state.goodsList = goodsList
        },
        changeGoodsCount(state: any, goodsCount: number) {
            state.goodsCount = goodsCount
        },
        changeMenuList(state: any, menuList: any[]) {
            state.menuList = menuList
        },
        changeMenuCount(state: any, menuCount: number) {
            state.menuCount = menuCount
        }
    },
    actions: {
        async getPageList({ commit }, payload: any) {
            // 1.获取url
            const pageName = payload.pageName
            const pageUrl = `api/${pageName}/list`
            // 2.对页面发送请求
            const pageResult: any = await getPageListData(pageUrl, payload.queryInfo)
            // 3.将数据存储到state中
            const { list, totalCount } = pageResult.data
            commit(`change${_.capitalize(pageName)}List`, list)
            commit(`change${_.capitalize(pageName)}Count`, totalCount)
        },
        // 删除用户
        async deletePageDataAction({ dispatch }, payload: any) {
            // 1.告诉我pageName，我们要拼接
            // 2.传过来id
            const { pageName, id } = payload
            const pageUrl = `api/${pageName}/${id}`
            const result = await deletePageData(pageUrl)
            console.log(result)
            // 3.重新请求最新数据
            dispatch("getPageList", {
                pageName,
                // 可以优化
                queryInfo: {
                    offset: 0,
                    size: 10
                }
            })
        }
    },
    getters: {
        pageListData(state) {
            return (pageName: string) => {
                return (state as any)[`${pageName}List`]
            }
        },
        pageListCount(state) {
            return (pageName: string) => {
                return (state as any)[`${pageName}Count`]
            }
        }
    }
}

export default systemModule
