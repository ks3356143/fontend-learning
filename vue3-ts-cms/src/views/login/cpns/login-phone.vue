<template>
    <div class="login-phone">
        <el-form label-width="60px" :model="account" :rules="rules">
            <el-form-item label="账号" prop="name">
                <el-input v-model="account.name" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <div class="get-code">
                    <el-input v-model="account.password" clearable class="pwdClass" show-password></el-input>
                    <el-button type="primary">获取验证码</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { rules } from "@/views/login/config/account-config"

export default defineComponent({
    name: "login-phone",
    setup() {
        const account = reactive({
            name: "",
            password: ""
        })

        return { rules, account }
    }
})
</script>

<style lang="less" scoped>
.get-code {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.pwdClass {
    width: 230px; //给一个宽度，不然两个元素靠在一起
}
</style>
