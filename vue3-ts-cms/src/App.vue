<template>
    <div id="app">
        <router-link to="/login">登录</router-link>
        <router-link to="/main">首页</router-link>
        <router-view />
        <el-button>哈哈哈</el-button>
        <el-button type="primary">哈哈哈</el-button>
        <el-button type="danger">哈哈哈</el-button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { ElButton } from "element-plus"
export default defineComponent({
    name: "App",
    components: { ElButton }
})
</script>
<style lang="less" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.router-link-active {
    color: red;
}
:global(.el-button) {
    border-radius: 0;
}
</style>
