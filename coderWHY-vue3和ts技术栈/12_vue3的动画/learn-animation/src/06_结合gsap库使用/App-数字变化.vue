<template>
    <div>
        <input type="number" step="100" v-model="counter" @input="input">
        <h2>当前数字：{{ showCounter.toFixed(0) }}</h2>
    </div>
</template>

<script>
import gsap from 'gsap'
export default {
    data() {
        return {
            counter: 0,
            showCounter: 0
        }
    },
    methods: {
        input() {
            gsap.to(this, {
                showCounter: this.counter,
                duration: 0.5
            })
        }
    }
}
</script>

<style scoped>
.title {
    width: 200px;
    height: 100px;
}
</style>