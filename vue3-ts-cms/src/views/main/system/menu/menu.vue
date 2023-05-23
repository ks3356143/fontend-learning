<template>
    <div class="menu">
        <div class="content">
            <page-content :content-tabel-config="contentTabelConfig" page-name="menu"></page-content>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    name: "Menu"
})
</script>
<script setup lang="ts">
import PageContent from "@/components/page-content"
import { contentTabelConfig } from "@/views/main/system/menu/config/contentConfig"
</script>

<style scoped></style>
