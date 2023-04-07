<template>
    <div>
        <hr>
        <h2>总价格：{{ $store.state.counter }}</h2>
        <button @click="increment">Home里的加1</button>
        <button @click="decrement">Home里的减1</button>
        <button @click="incrementN(100)">Home里+100</button>
        <button @click="incrementN(10)">Home里+10</button>
        <hr>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    setup() {
        const storeMutations = mapMutations(['increment', 'decrement', 'incrementN'])
        return {
            ...storeMutations
        }
    }
}
</script>

<style scoped></style>