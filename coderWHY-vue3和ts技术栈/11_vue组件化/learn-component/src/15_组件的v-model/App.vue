<template>
    <div>
        <HyInput v-model="message"></HyInput>
        <h2>{{ message }}</h2>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import HyInput from './HyInput.vue';
const message = ref("父组件默认message")

</script>

<style scoped></style>