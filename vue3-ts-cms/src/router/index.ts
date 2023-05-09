import { createRouter, createWebHistory } from "vue-router"
// 导入别人的类型declare
// 下面加了个type，表示不是什么函数，只是个类型，好处是有智能提示
import type { RouteRecordRaw } from "vue-router"
import localCache from "@/utils/cache"
// 取到utils里面的第一个匹配菜单
import { firstMenu } from "@/utils/map-menus"

// 因为每个route对象，都有其属性，vue-router有类型注解
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/main"
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/login.vue")
    },
    {
        path: "/main",
        name: "main",
        component: () => import("@/views/main/main.vue")
        // children: [] -> 根据userMenus来决定
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("@/views/not-found/not-found.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

// 全局开始导航守卫
router.beforeEach((to) => {
    if (to.path !== "/login") {
        const token = localCache.getCache("token")
        if (!token) {
            return "/login"
        }
    }
    if (to.path === "/main") {
        return firstMenu.url
    }
})

export default router
