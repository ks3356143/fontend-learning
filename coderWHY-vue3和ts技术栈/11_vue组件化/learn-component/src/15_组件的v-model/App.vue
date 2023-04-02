<template>
    <div>
        <!-- 绑定两个v-model -->
        <HyInput v-model="message" v-model:title="title"></HyInput>
        <h2>{{ message }}</h2>
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
import HyInput from './HyInput.vue'
export default {
    components: { HyInput },
    data() {
        return {
            message: 'input的显示',
            title: ''
        }
    },
}
</script>

<style scoped></style>