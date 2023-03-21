<template>
    <div @click="divClick">
        Home组件而非文字,我拿到属性为{{ name }}和{{ age }}
    </div>
</template>

<script>
export default {
    name:'home',
    emits:['homeClick'],
    props: {
        name: {
            type: String,
            default: ""
        },
        age: Number
    },
    methods: {
        divClick(){
            this.$emit('homeClick')
        }
    },
}
</script>

<style scoped></style>