<template>
    <div>
        <h2>HomeContent:{{ name }}-{{ age }}-名字长度：{{ length.value }}</h2>
    </div>
</template>

<script>
export default {
    inject: ["name", 'age', 'length'],
    data() {
        return {

        }
    },
}
</script>

<style scoped></style>