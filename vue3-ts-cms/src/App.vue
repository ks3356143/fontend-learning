<template>
    <div class="app">
        <el-config-provider :locale="locale">
            <router-view />
        </el-config-provider>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { ElConfigProvider } from "element-plus"
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
export default defineComponent({
    components: { ElConfigProvider },
    name: "App",
    setup() {
        return { locale: zhCn }
    }
})
</script>
<style lang="less" scoped>
.app {
    height: 100%;
}
:global(.el-button) {
    border-radius: 0;
}
</style>
