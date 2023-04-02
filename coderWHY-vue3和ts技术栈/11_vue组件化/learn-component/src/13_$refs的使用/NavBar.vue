<template>
    <div>
        <h2>NavBar</h2>
        <button @click="getParentAndRoot">获取父组件和根组件</button>
    </div>
</template>

<script>
export default {
    methods: {
        sayHello() {
            console.log("hello navbar");
        },
        getParentAndRoot() {
            console.log(1);
            console.log(this.$parent.$el);
            console.log(this.$root.$el);

        }
    }

}
</script>

<style scoped></style>