<template>
    <div class="user">
        <div class="search">
            <page-search :searchFormConfig="searchFormConfig"></page-search>
        </div>
        <div class="content"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageSearch from "@/components/page-search"
import { searchFormConfig } from "@/views/main/system/user/config/searchConfig"
export default defineComponent({
    name: "user",
    components: { pageSearch },
    setup() {
        return { searchFormConfig }
    }
})
</script>

<style scoped>
:global(.el-button) {
    border-radius: 0;
}
</style>
