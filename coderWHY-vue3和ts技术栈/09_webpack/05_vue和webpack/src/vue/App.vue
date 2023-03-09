<template>
    <h2>我是vue渲染的</h2>
    <h2>{{ title }}</h2>
    <Hello></Hello>
</template>

<script>
import Hello from './Hello.vue'

export default {
    components:{
        Hello:Hello
    },
    data:()=>{
        return {
            title:'我是vue渲染出来的'
        }
    }
}
</script>

<style scoped>
h2{
    color:red;
}
</style>