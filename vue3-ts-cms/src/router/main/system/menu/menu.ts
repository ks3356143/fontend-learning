const menu = () => import("@/views/main/system/menu/menu.vue")
export default {
    path: "/main/system/menu",
    // 注意大写Menu
    name: "Menu",
    component: menu,
    children: []
}
