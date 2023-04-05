<template>
    <div>
        <h2>Home组件页面</h2>
        <h2>query:{{ $route.query }}</h2>
        <ul>
            <li>home内容1</li>
            <li>home内容2</li>
            <li>home内容3</li>
            <li>home内容4</li>
            <li>home内容5</li>
        </ul>
        <router-link to="/home/message">消息</router-link>
        <router-link to="/home/shopes">商品</router-link>
        <router-link to="/home/moment">
            <button>动态添加的moment</button>
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>