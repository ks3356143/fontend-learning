import { Module } from "vuex"
// 导入类型
import { ILoginState } from "@/store/login/types"
import { IRootState } from "@/store/types"
// 导入login的请求函数accountLoginRequest,第二个导入拿到IAcount类型
import type { IAccount } from "@/service/login/types"
import { accountLoginRequest, requestUserInfoById } from "@/service/login/login"
import localCache from "@/utils/cache"
import router from "@/router"
// 导入路由
import { mapMenusToRoutes, mapMenusToPermissions } from "@/utils/map-menus"
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
                            name: "核心技术",
                            parentId: 38,
                            sort: 106,
                            type: 2,
                            url: "/main/analysis/overview"
                        },
                        {
                            children: null,
                            id: 402,
                            name: "商品统计",
                            parentId: 38,
                            sort: 106,
                            type: 2,
                            url: "/main/analysis/dashboard"
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
                            name: "用户管理",
                            parentId: 42,
                            sort: 106,
                            type: 2,
                            url: "/main/system/user"
                        },
                        {
                            children: null,
                            id: 404,
                            name: "部门管理",
                            parentId: 42,
                            sort: 107,
                            type: 2,
                            url: "/main/system/department"
                        },
                        {
                            children: null,
                            id: 405,
                            name: "菜单管理",
                            parentId: 42,
                            sort: 108,
                            type: 2,
                            url: "/main/system/menu"
                        },
                        {
                            children: null,
                            id: 406,
                            name: "角色管理",
                            parentId: 42,
                            sort: 109,
                            type: 2,
                            url: "/main/system/role"
                        }
                    ],
                    icon: "Tools",
                    id: 42,
                    name: "系统管理",
                    sort: 2,
                    type: 1,
                    url: "main/system"
                },
                {
                    children: [
                        {
                            children: null,
                            id: 408,
                            name: "商品类别",
                            parentId: 43,
                            sort: 108,
                            type: 2,
                            url: "/main/product/category"
                        },
                        {
                            children: null,
                            id: 409,
                            name: "商品信息",
                            parentId: 43,
                            sort: 108,
                            type: 2,
                            url: "/main/product/goods"
                        }
                    ],
                    icon: "CirclePlus",
                    id: 43,
                    name: "商品中心",
                    sort: 3,
                    type: 1,
                    url: "main/product"
                },
                {
                    children: [
                        {
                            children: null,
                            id: 411,
                            name: "你的故事",
                            parentId: 44,
                            sort: 110,
                            type: 2,
                            url: "/main/story/chat"
                        },
                        {
                            children: null,
                            id: 410,
                            name: "故事列表",
                            parentId: 44,
                            sort: 109,
                            type: 2,
                            url: "/main/story/list"
                        }
                    ],
                    icon: "Folder",
                    id: 44,
                    name: "随便聊聊",
                    sort: 4,
                    type: 1,
                    url: "main/story"
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
        },
        changeMenus(state) {
            const routes = mapMenusToRoutes(state.userMenus)
            routes.forEach((route: any) => {
                router.addRoute("main", route)
            })
            // 获取用户按钮的权限（未做）
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
            // 3.请求用户菜单！（暂时没做,这里需要改记得！）
            // context.commit("changeUserMenus")
            // 4.1 发送初始化请求
            context.dispatch("getInitial", null, { root: true })
            // 4.跳转首页
            router.push("/main")
        },
        // 这个是在main.ts中调用初始化时启动
        loadLocalLogin({ commit, dispatch }) {
            const token = localCache.getCache("token")
            if (token) {
                commit("changeToken", token)
                // 再掉一次初始化请求
                dispatch("getInitial", null, { root: true })
            }
            const userInfo = localCache.getCache("userInfo")
            if (userInfo) {
                commit("changeUserInfo", userInfo)
            }
            // 调试信息，动态添加路由在main.ts中dispatch
            commit("changeMenus")
        },
        phoneLoginAction(context, payload: any) {
            console.log("执行accountLoginAction,传入的账号和密码为：", payload)
        }
    }
}

export default loginModule
