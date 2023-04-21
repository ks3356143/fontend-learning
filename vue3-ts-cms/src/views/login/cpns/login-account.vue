<template>
    <div class="login-account">
        <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
            <el-form-item label="账号" prop="name">
                <el-input v-model="account.name" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="account.password" show-password clearable></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { rules } from "@/views/login/config/account-config"
import { ElForm, ElMessage } from "element-plus"
import "element-plus/theme-chalk/el-message.css"
import localCache from "@/utils/cache"
import { useStore } from "vuex"

export default defineComponent({
    name: "login-account",
    setup() {
        //获取vuex仓库
        const store = useStore()
        const account = reactive({
            name: localCache.getCache("name") ?? "",
            password: localCache.getCache("password") ?? ""
        })
        const formRef = ref<InstanceType<typeof ElForm>>()
        const loginAction = (isKeepPwd: boolean) => {
            formRef.value?.validate((valid) => {
                if (valid) {
                    // 1.判断是否记住密码
                    if (isKeepPwd) {
                        // 本地缓存
                        localCache.setCache("name", account.name)
                        localCache.setCache("password", account.password)
                    } else {
                        localCache.deleteCache("name")
                        localCache.deleteCache("password")
                    }
                    // 2.登录逻辑
                    store.dispatch("login/accountLoginAction", { ...account })
                } else {
                    ElMessage({
                        showClose: true,
                        message: "请检查账号密码是否规范！",
                        type: "error"
                    })
                }
            })
        }

        return { account, rules, formRef, loginAction }
    }
})
</script>

<style lang="less" scoped></style>
