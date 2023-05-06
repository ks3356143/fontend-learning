<template>
    <div class="user-info">
        <div class="userInfo">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-text>{{ $store.state.login.userInfo.name }}</el-text>
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
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
import { defineComponent } from "vue"
import { ArrowDown, CloseBold } from "@element-plus/icons-vue"

export default defineComponent({
    components: { ArrowDown, CloseBold },
    setup() {
        return {}
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
</style>
