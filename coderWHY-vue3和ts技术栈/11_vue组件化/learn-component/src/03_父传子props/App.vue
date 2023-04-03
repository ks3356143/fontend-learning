<template>
    <div>
        <ShowMessage class='123' class2="321" title="哈哈哈1" content="我是hahah-one"></ShowMessage>
        <MultRootElement id="aaa"></MultRootElement>
    </div>
</template>

<script setup>
import ShowMessage from './ShowMessage.vue';
import MultRootElement from './MultRootElement.vue';
import { provide, ref } from 'vue';

const message = ref("是我父组件提供的")
provide("message", message)
</script>

<style scoped></style>