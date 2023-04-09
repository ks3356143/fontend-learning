<template>
  <div>
      <h2 v-format-time="'YYYY:MM:DD'">{{ timestamp }}</h2>
      <h2 v-format-time>{{ timestamp }}</h2>
  </div>
</template>

<script setup>
const timestamp = 1624452193

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
