<template>
    <div id="app">
        <router-link to="/home" replace active-class="red">首页</router-link>
        <router-link to="/about" replace active-class="red">关于</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style scoped>
.red{
    color: red;
}
</style>