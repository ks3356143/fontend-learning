<template>
    <div>
        <h2>当前计数：{{ counter }}</h2>
        <CounterOperation @add="addone" 
                          @sub="subone" 
                          @addN="addNumber"></CounterOperation>
    </div>
</template>

<script>
import CounterOperation from './CounterOperation.vue';
export default {
    components:{CounterOperation},
    data:function(){
        return {
            counter:0
        }
    },
    methods:{
        addone(){
            this.counter ++
        },
        subone(){
            this.counter --
        },
        addNumber(addNumber){
            this.counter += addNumber
        }
    }
}
</script>

<style scoped></style>