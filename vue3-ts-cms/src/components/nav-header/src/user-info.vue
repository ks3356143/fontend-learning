<template>
    <div class="user-info">
        <div class="userInfo">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-text>{{ username }}</el-text>
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleexitClick">
                            <el-icon><CloseBold /></el-icon>
                            退出登录
                        </el-dropdown-item>
                        <el-dropdown-item divided>用户信息</el-dropdown-item>
                        <el-dropdown-item>系统管理</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { ArrowDown, CloseBold } from "@element-plus/icons-vue"
import { useStore } from "vuex"
import localCache from "@/utils/cache"
import { useRouter } from "vue-router"

export default defineComponent({
    components: { ArrowDown, CloseBold },
    setup() {
        const store = useStore()
        // 在右上角显示当前登录用户名
        const username = computed(() => {
            return store.state.login.userInfo.name
        })
        // 退出登录
        const router = useRouter()
        const handleexitClick = () => {
            console.log("点击了退出登录，删除token")
            localCache.deleteCache("token")
            router.push("/main")
        }
        return { username, handleexitClick }
    }
})
</script>

<style scoped lang="less">
.example-showcase,
.el-dropdown-link {
    cursor: pointer;
    color: #409eff;
    display: flex;
    align-items: center;
}
.el-dropdown-link:focus {
    outline: none; //注意外边框不止boder还有outline,而且不止hover还有focus
}
.userInfo {
    display: flex;
    align-items: center;
}
</style>
