<template>
    <div class="nav-menu">
        <div class="logo">
            <img src="~@/assets/img/wxwx-logo.svg" alt="测评中心主站" />
            <span v-if="!collapse" class="title">测试管理系统</span>
        </div>
        <el-menu
            default-active="391"
            class="el-menu-vertical"
            background-color="#0c2135"
            active-text-color="#0a60bd"
            text-color="#b7bdc3"
            :collapse="collapse"
            :collapse-transition="false"
        >
            <template v-for="item in userMenus" :key="item.id">
                <template v-if="item.type === 1">
                    <el-sub-menu :index="item.id + ''">
                        <template #title>
                            <el-icon><component v-if="item.icon" :is="item.icon"></component></el-icon>
                            <span>{{ item.name }}</span>
                        </template>
                        <template v-for="subitem in item.children" :key="subitem.id">
                            <el-menu-item :index="subitem.id + ''" @click="handleMenuItemClick(subitem)">
                                <el-icon><component v-if="subitem.icon" :is="subitem.icon"></component></el-icon>
                                <span>{{ subitem.name }}</span>
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else-if="item.type === 2">
                    <el-menu-item :index="item.id + ''">
                        <el-icon>
                            <component v-if="item.icon" :is="item.icon"></component>
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { Folder, CirclePlus, Tools, Monitor } from "@element-plus/icons-vue"
import { useStore } from "@/store/index"
import { useRouter } from "vue-router"

export default defineComponent({
    components: { Folder, CirclePlus, Tools, Monitor },
    props: {
        collapse: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const store = useStore()
        const userMenus = computed(() => store.state.login.userMenus)
        // 处理角色路由
        const router = useRouter()
        const handleMenuItemClick = (item: any) => {
            router.push({
                path: item.url ?? "/not-found"
            })
        }

        return { userMenus, handleMenuItemClick }
    }
})
</script>

<style scoped lang="less">
.nav-menu {
    height: 100%;
    background-color: #001529;
    .logo {
        display: flex;
        height: 30px;
        padding: 12px 10px 8px 10px;
        justify-content: flex-start;
        align-items: center;
        img {
            height: 100%;
            margin: 0 13px;
        }
        .title {
            font-size: 16px;
            font-weight: 700;
            color: white;
            height: 200px;
        }
    }
    .el-menu {
        border-right: none;
    }
    .el-sub-menu {
        background-color: #001529 !important;
        .el-menu-item {
            background-color: #0e273e;
        }
    }
    ::v-deep .el-sub-menu__title {
        background-color: #001529 !important;
    }
    .el-menu-item:hover {
        color: #dcd024 !important;
        background-color: #2a7cd4;
    }
    .el-menu-item.is-active {
        color: #dcd024 !important;
        background-color: #0a60bd !important;
    }
}
.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    height: calc(100%-48px);
}
</style>
