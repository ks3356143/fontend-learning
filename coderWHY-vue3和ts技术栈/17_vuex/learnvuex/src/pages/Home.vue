<template>
    <div>
        <hr>
        <h2>当前计数：{{ $store.state.counter }}</h2>
        <button @click="increment">点击分发：增加</button>
        <button @click="$store.dispatch('decrement')">点击查看context的log</button>
        <hr>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted } from 'vue'
export default {
    setup() {
        const store = useStore()
        const increment = function () {
            store.dispatch("incrementAction")
        }

        onMounted(() => {
            store.dispatch("getHomeMultiData")
        })

        return {
            increment
        }
    }
}
</script>

<style scoped></style>