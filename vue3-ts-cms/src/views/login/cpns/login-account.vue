<template>
    <div class="login-account">
        <el-form label-width="60px" :rules="rules" :model="account">
            <el-form-item label="账号" prop="name">
                <el-input v-model="account.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="account.password"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
    name: "login-account",
    setup() {
        const account = reactive({
            name: "",
            password: ""
        })
        // 编写规则
        const rules = {
            name: [
                {
                    required: true,
                    message: "您的用户名为必填内容", // 验证失败的提示
                    trigger: "blur" // 失去焦点开始验证
                },
                {
                    pattern: /^[a-z0-9]{5,10}$/,
                    message: "用户名必须是5~10个字母或数字",
                    trigger: "blur"
                }
            ],
            password: [
                {
                    required: true,
                    message: "密码为必填内容", // 验证失败的提示
                    trigger: "blur" // 失去焦点开始验证
                },
                {
                    pattern: /^[a-z0-9]{3,20}$/, // 3个以上是逗号，逗号后面不写
                    message: "用户名必须是3个以上20个以下字母或数字",
                    trigger: "blur"
                }
            ]
        }
        return { account, rules }
    }
})
</script>

<style lang="less" scoped></style>
