<template>
    <div>
        <input type="number" step="100" v-model="counter">
        <h2>当前数字：{{ showCounter.toFixed() }}</h2>
    </div>
</template>

<script setup>
import gsap from 'gsap'
import { ref, watch } from 'vue'
const counter = ref(0)
const showCounter = ref(0)

watch(counter, (newValue, oldValue) => {
    gsap.to(showCounter,{
        value:counter.value,
        duration:1
    })
})

</script>

<style scoped>
.title {
    width: 200px;
    height: 100px;
}
</style>