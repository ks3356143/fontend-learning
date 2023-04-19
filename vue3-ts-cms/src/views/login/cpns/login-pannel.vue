<template>
    <div class="login-pannel">
        <h1 class="title">成都测评平台</h1>
        <el-tabs type="border-card" class="demo-tabs" stretch>
            <el-tab-pane>
                <template #label>
                    <el-icon><UserFilled /></el-icon>
                    账号登录
                </template>
                <h2>账号登录</h2>
            </el-tab-pane>
            <el-tab-pane>
                <template #label>
                    <el-icon><Message /></el-icon>
                    账号注册
                </template>
                <h2>账号注册</h2>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Message, UserFilled } from "@element-plus/icons-vue"

export default defineComponent({
    components: { Message, UserFilled },
    setup() {
        return {}
    }
})
</script>

<style lang="less" scoped>
.login-pannel {
    width: 320px;
    .title {
        text-align: center;
    }
}
</style>
