import { createRouter, createWebHistory } from "vue-router"
// 导入别人的类型declare
// 下面加了个type，表示不是什么函数，只是个类型，好处是有智能提示
import type { RouteRecordRaw } from "vue-router"

// 因为每个route对象，都有其属性，vue-router有类型注解
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        component: () => import("@/views/login/login.vue")
    },
    {
        path: "/main",
        component: () => import("@/views/main/main.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
