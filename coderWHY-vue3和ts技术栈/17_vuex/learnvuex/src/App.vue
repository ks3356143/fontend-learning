<template>
  <div id="app">
    <h2>{{ $store.state.counter }}</h2>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
    <h2>下面是Home组件内容</h2>
    <hr>
    <home></home>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import Home from './pages/Home.vue'
const store = useStore()
const increment = function () {
  store.commit("increment")
}
const decrement = function () {
  store.commit("decrement")
}

</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
