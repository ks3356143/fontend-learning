<template>
    <div>
        <hr>
        <h2>根store的：{{ $store.state.rootCounter }}</h2>
        <h2>home的：{{ $store.state.home.homeCounter }}</h2>
        <h2>user的：{{ $store.state.user.userCounter }}</h2>
        <button @click="homeIncrement">homeCounter+1</button>
        <button @click="homeIncrementAction">homeCounter-Actions+1</button>
        <hr>
        <h2>展示doubleCounter：{{ $store.getters["home/doubleHomeCounter"] }}</h2>
        <hr>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted } from 'vue'
export default {
    setup() {
        const store = useStore()
        const homeIncrement = () => {
            store.commit("home/increment")
        }
        const homeIncrementAction = () => {
            store.dispatch("incrementAction")
        }
        return { homeIncrement,homeIncrementAction }
    }
}
</script>

<style scoped></style>