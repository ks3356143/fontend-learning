<template>
    <div>
        <h2>Main</h2>
        <h2>{{ $store.state.name }}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    setup() {
        return {}
    }
})
</script>

<style scoped></style>
