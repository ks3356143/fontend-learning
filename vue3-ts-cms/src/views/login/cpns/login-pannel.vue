<template>
    <div class="login-pannel">
        <h1 class="title">成都测评平台</h1>
        <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
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
                <login-phone ref="phoneRef"></login-phone>
            </el-tab-pane>
        </el-tabs>
        <div class="pwdChange">
            <el-checkbox v-model="isKeepPwd">记住密码</el-checkbox>
            <el-link type="primary" :underline="false" class="el-link">
                <el-icon><Lock /></el-icon>
                忘记密码
            </el-link>
        </div>
        <el-button v-if="currentTab === '0'" type="primary" class="login-btn" @click="handleLoginClick">
            立即登录
        </el-button>
        <el-button v-else type="primary" class="login-btn" @click="handleRegisterClick">点击注册</el-button>
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
        //定义是否用户是否记录密码
        const isKeepPwd = ref(false)
        //拿到login-account.vue组件，以便使用其函数
        const accountRef = ref<InstanceType<typeof LoginAccount>>()
        const phoneRef = ref<InstanceType<typeof LoginPhone>>()
        const handleLoginClick = () => {
            accountRef.value?.loginAction(isKeepPwd.value)
        }
        const handleRegisterClick = () => {
            phoneRef.value?.registerAction()
        }
        //定义el-tabs的v-model
        const currentTab = ref<string>("0")
        return { isKeepPwd, accountRef, handleLoginClick, currentTab, handleRegisterClick }
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
