<template>
    <h2 :id="$attrs.id">多个根元素1</h2>
    <h2>多个根元素2</h2>
    <h2>多个根元素3:inject传过来的是{{ message }}</h2>
</template>

<script setup>
import { inject } from 'vue';
const message = inject("message")

</script>

<style scoped>

</style>