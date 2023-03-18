<template>
    <div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>

        <input type="text" v-model.number="addNumber">
        <button @click="incrementN">+N</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                addNumber:0
            }
        },
        emits:["add","sub","addN"], //定义注册子组件的事件，在vue3里面都要写
        methods:{
            increment(){
                this.$emit('add')
            },
            decrement:function(){
                this.$emit('sub')
            },
            incrementN(){
                this.$emit('addN',this.addNumber)
            }
        }
    }
</script>

<style scoped>

</style>