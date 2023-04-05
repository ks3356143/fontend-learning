import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', redirect: '/home' },
    {
        name: 'home',
        meta: {},
        path: "/home",
        component: () => import('../pages/Home.vue'),
        children: [
            {
                path: "", redirect: "/home/message"
            },
            {
                path: "message",
                component: () => import('../pages/HomeMessage.vue')
            },
            {
                path: "shopes",
                component: () => import('../pages/HomeShopes.vue')
            },
            {
                path: "/:pathMatch(.*)*",
                component: () => import('../pages/GoodsNotFound.vue')
            },
        ]
    },
    { path: '/about', component: () => import('../pages/About.vue') },
    { path: '/user/:username/-:id', component: () => import('../pages/User.vue') },
    { path: "/:pathMatch(.*)*", component: () => import('../pages/NotFound.vue') }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

// 动态添加路由
const categoryRoute = {
    path: "/category",
    component: () => import('../pages/Category.vue')
}
router.addRoute(categoryRoute)
// 动态添加二级页面
router.addRoute("home", {
    path: 'moment',
    component: () => import('../pages/HomeMoment.vue')
})

// 导航守卫-进行了一次路由跳转
let count = 0
router.beforeEach((to, from) => {
    if(to.path.indexOf("/home") !== -1){
        return '/login'
    }
})

export default router
