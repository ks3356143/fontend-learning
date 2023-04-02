<template>
    <h2>SFC渲染出来的vue1</h2>
    <h2>{{ title }}</h2>
    <Hello></Hello>
</template>

<script>
import Hello from './Hello'
export default {
    components: {
        Hello: Hello
    },
    data: function () {
        return {
            title: '我是根节点的vue根组件'
        }
    }
}

</script>

<style scoped></style>