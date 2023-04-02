<template>
    <div>
        <h2>下面是子组件的input</h2>
        <input type="text" v-model="value">
    </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps({
    modelValue: {
        type: String,
    }
})
const emit = defineEmits(["update:modelValue"])

const value = computed({
    get() {
        return props.modelValue
    },
    set(newValue) {
        emit("update:modelValue", newValue)
    }
})

</script>

<style scoped></style>