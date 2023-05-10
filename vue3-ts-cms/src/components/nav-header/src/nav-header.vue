<template>
    <div class="nav-header">
        <el-icon class="fold-menu" :size="30" @click="handleFoldClick">
            <component :is="isFold ? 'Expand' : 'Fold'"></component>
        </el-icon>
        <div class="content">
            <div><chen-bread-crumb :breadcrumbs="breadcrumbs"></chen-bread-crumb></div>
            <user-info></user-info>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, ComputedRef } from "vue"
import { Expand, Fold } from "@element-plus/icons-vue"
import UserInfo from "@/components/nav-header/src/user-info.vue"
import chenBreadCrumb, { IBreadcrumb } from "@/base-ui/breadcrumb"
// 导入识别现在路径的函数
import { pathMapBreadCrumbs } from "@/utils/map-menus"
import { useStore } from "vuex"
import { useRoute } from "vue-router"

export default defineComponent({
    emits: ["foldChange"],
    components: { UserInfo, chenBreadCrumb, Fold, Expand },
    setup(props, { emit }) {
        const isFold = ref<boolean>(false)
        const handleFoldClick = () => {
            isFold.value = !isFold.value
            emit("foldChange", isFold.value)
        }
        // 面包屑逻辑
        const store = useStore()
        const breadcrumbs: ComputedRef<IBreadcrumb[]> = computed(() => {
            const userMenus = store.state.login.userMenus
            const route = useRoute()
            const currentPath = route.path
            return pathMapBreadCrumbs(userMenus, currentPath)
        })
        return { handleFoldClick, isFold, breadcrumbs }
    }
})
</script>

<style scoped lang="less">
.nav-header {
    display: flex;
    width: 100%;
    .fold-menu {
        cursor: pointer;
    }

    .content {
        display: flex;
        flex: 1; // 占用剩余所有部分
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
