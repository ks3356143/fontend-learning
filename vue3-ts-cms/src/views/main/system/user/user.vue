<template>
    <div class="user">
        <div class="search">
            <page-search :searchFormConfig="searchFormConfig"></page-search>
        </div>
        <div class="content">
            <page-content :contentTabelConfig="contentTabelConfig" :page-name="'user'"></page-content>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageSearch from "@/components/page-search"
import pageContent from "@/components/page-content"
import { searchFormConfig } from "@/views/main/system/user/config/searchConfig"
import { contentTabelConfig } from "@/views/main/system/user/config/contentConfig"
export default defineComponent({
    name: "user",
    components: { pageSearch, pageContent },
    setup() {
        return {
            searchFormConfig,
            contentTabelConfig
        }
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
