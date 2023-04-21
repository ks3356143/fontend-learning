<template>
    <div class="login-pannel">
        <h1 class="title">成都测评平台</h1>
        <el-tabs type="border-card" class="demo-tabs" stretch>
            <el-tab-pane>
                <template #label>
                    <el-icon><UserFilled /></el-icon>
                    账号登录
                </template>
                <login-account ref="accountRef"></login-account>
            </el-tab-pane>
            <el-tab-pane>
                <template #label>
                    <el-icon><Message /></el-icon>
                    账号注册
                </template>
                <login-phone></login-phone>
            </el-tab-pane>
        </el-tabs>
        <div class="pwdChange">
            <el-checkbox v-model="isKeepPwd">记住密码</el-checkbox>
            <el-link type="primary" :underline="false" class="el-link">
                <el-icon><Lock /></el-icon>
                忘记密码
            </el-link>
        </div>
        <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { Message, UserFilled, Lock } from "@element-plus/icons-vue"
import LoginAccount from "@/views/login/cpns/login-account.vue"
import LoginPhone from "@/views/login/cpns/login-phone.vue"

export default defineComponent({
    name: "login-pannel",
    components: { Message, UserFilled, LoginAccount, LoginPhone, Lock },
    setup() {
        const isKeepPwd = ref(false)
        const accountRef = ref<InstanceType<typeof LoginAccount>>()
        const handleLoginClick = () => {
            accountRef.value?.loginAction(isKeepPwd.value)
        }
        return { isKeepPwd, accountRef, handleLoginClick }
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
.pwdChange {
    display: flex;
    justify-content: space-between;
}
.login-btn {
    width: 100%;
}
:global(.el-button) {
    border-radius: 0;
}
</style>
