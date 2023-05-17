<template>
    <div class="role">
        <div class="search">
            <page-search :searchFormConfig="searchFormConfig"></page-search>
        </div>
        <div class="content">
            <page-content :contentTabelConfig="contentTabelConfig" :page-name="'role'"></page-content>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageSearch from "@/components/page-search"
import pageContent from "@/components/page-content"
import { contentTabelConfig } from "@/views/main/system/role/config/contentConfig"
import { searchFormConfig } from "@/views/main/system/role/config/searchConfig"
export default defineComponent({
    components: { pageSearch, pageContent },
    name: "role",
    setup() {
        return { contentTabelConfig, searchFormConfig }
    }
})
</script>

<style scoped>
:global(.el-button) {
    border-radius: 0;
}
.content {
    padding: 5px 20px;
    border-top: 8px solid #f5f5f5;
}
</style>
