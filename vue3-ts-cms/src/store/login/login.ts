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
            userInfo: "",
            // 这里后面修改为后端返回用户菜单
            userMenus: [
                {
                    children: [
                        {
                            children: null,
                            id: 391,
                            name: "核心技术1",
                            parentId: 38,
                            sort: 106,
                            type: 2,
                            url: "/main/analysis/overview"
                        },
                        {
                            children: null,
                            id: 402,
                            name: "核心技术2",
                            parentId: 38,
                            sort: 106,
                            type: 2,
                            url: "/main/analysis/overview"
                        }
                    ],
                    icon: "Monitor",
                    id: 41,
                    name: "系统总览",
                    sort: 1,
                    type: 1,
                    url: "main/analysis"
                },
                {
                    children: [
                        {
                            children: null,
                            id: 403,
                            name: "子菜单123",
                            parentId: 42,
                            sort: 106,
                            type: 2,
                            url: "/main/analysis/overview"
                        },
                        {
                            children: null,
                            id: 404,
                            name: "子菜单321",
                            parentId: 42,
                            sort: 107,
                            type: 2,
                            url: "/main/analysis/overview"
                        }
                    ],
                    icon: "Tools",
                    id: 42,
                    name: "系统管理",
                    sort: 2,
                    type: 1,
                    url: "main/manage"
                },
                {
                    children: [
                        {
                            children: null,
                            id: 408,
                            name: "三级菜单1",
                            parentId: 43,
                            sort: 108,
                            type: 2,
                            url: "/main/analysis/overview"
                        },
                        {
                            children: null,
                            id: 409,
                            name: "三级菜单2",
                            parentId: 43,
                            sort: 108,
                            type: 2,
                            url: "/main/analysis/overview"
                        }
                    ],
                    icon: "CirclePlus",
                    id: 43,
                    name: "三号",
                    sort: 3,
                    type: 1,
                    url: "main/settings"
                },
                {
                    children: [
                        {
                            children: null,
                            id: 411,
                            name: "沉思1",
                            parentId: 44,
                            sort: 110,
                            type: 2,
                            url: "/main/analysis/overview"
                        },
                        {
                            children: null,
                            id: 410,
                            name: "沉思2",
                            parentId: 44,
                            sort: 109,
                            type: 2,
                            url: "/main/analysis/overview"
                        }
                    ],
                    icon: "Folder",
                    id: 44,
                    name: "陈俊亦私藏",
                    sort: 4,
                    type: 1,
                    url: "main/analysis"
                }
            ]
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
            context.commit("changeToken", token)
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
