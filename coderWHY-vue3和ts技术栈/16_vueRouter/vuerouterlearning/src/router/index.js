import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    { path: "/", redirect: "/home" },
    {
        path: '/home', component: () => import(/* webpackChunkNmae:'home-chunk' */'../pages/Home.vue')
    },
    {
        path: '/about', component: () => import(/* webpackChunkName:'about-chunk' */'../pages/About.vue')
    }
]

// 创建路由对象
const router = createRouter({
    routes,
    history: createWebHistory(),
})

// 安装路由对象
export default router