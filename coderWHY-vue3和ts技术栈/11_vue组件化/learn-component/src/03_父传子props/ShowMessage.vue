<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ $attrs.content }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    class:String,
    class2:String,
    title:String,
})

</script>

<style scoped></style>