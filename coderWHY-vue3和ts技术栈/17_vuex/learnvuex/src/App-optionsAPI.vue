<template>
  <div id="app">
    <h2>{{ $store.state.counter }}</h2>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
    <home></home>
    <h2>{{ sName }}</h2>
    <h2>{{ sCounter }}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import Home from './pages/Home-03mutation的使用.vue'
const store = useStore()
const increment = function () {
  store.commit("increment")
}
const decrement = function () {
  store.commit("decrement")
}

</script>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      sName: state => state.name,
      sCounter(state) {
        return state.counter
      }
    })
  }
}
</script>
<style></style>
