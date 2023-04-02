<template>
    <div>
        <!-- 绑定元素上 -->
        <h2 ref="ha">哈哈哈</h2>
        <button @click="btnClick">获取元素</button>

        <!-- 绑定组件实例上 -->
        <NavBar ref="navbar"></NavBar>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
    components: {
        NavBar
    },
    methods: {
        btnClick() {
            console.log(this.$refs.navbar.$el);
        }
    },
    data() {
        return {
            names:['abc','cba']
        }
    },
}
</script>

<style scoped></style>