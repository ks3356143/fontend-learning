<template>
    <div class="login-pannel">
        <h1 class="title">成都测评平台</h1>
        <el-tabs type="border-card" class="demo-tabs" stretch>
            <el-tab-pane>
                <template #label>
                    <el-icon><UserFilled /></el-icon>
                    账号登录
                </template>
                <login-account></login-account>
            </el-tab-pane>
            <el-tab-pane>
                <template #label>
                    <el-icon><Message /></el-icon>
                    账号注册
                </template>
                <login-phone></login-phone>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Message, UserFilled } from "@element-plus/icons-vue"
import LoginAccount from "@/views/login/cpns/login-account.vue"
import LoginPhone from "@/views/login/cpns/login-phone.vue"

export default defineComponent({
    name: "login-pannel",
    components: { Message, UserFilled, LoginAccount, LoginPhone },
    setup() {
        return {}
    }
})
</script>

<style lang="less" scoped>
.login-pannel {
    margin-bottom: 150px;
    width: 440px;
    .title {
        text-align: center;
    }
}
:deep(.el-tab-pane) {
    vertical-align: middle;
}
:deep(.el-icon) {
    margin-right: 5px;
}
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 800;
}
</style>
