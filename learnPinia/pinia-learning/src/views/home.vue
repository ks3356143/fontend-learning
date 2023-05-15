<template>
  <div class="home">
    <h2>Home View页面如下</h2>
    <hr />
    <h2>{{  }}</h2>
  </div>
</template>

<script setup lang="ts">
import useHomeStore from "../stores/home";
const homeStore = useHomeStore()
homeStore.fetchHomeMultidata()
</script>

<style scoped lang="less"></style>
