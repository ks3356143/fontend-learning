import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/home', component: Home
    },
    {
        path: '/about', component: About
    }
]

// 创建路由对象
const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

// 安装路由对象
export default router