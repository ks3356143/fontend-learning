<template>
    <div class="user">
        <div class="search">
            <page-search
                :searchFormConfig="searchFormConfig"
                @resetBtnClick="handleResetClick"
                @queryBtnClick="handleQueryClick"
            ></page-search>
        </div>
        <div class="content">
            <page-content
                :contentTabelConfig="contentTabelConfig"
                :page-name="'user'"
                ref="pageContentRef"
            ></page-content>
        </div>
        <page-model :model-config="modelConfig"></page-model>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageSearch from "@/components/page-search"
import { searchFormConfig } from "@/views/main/system/user/config/searchConfig"
import { contentTabelConfig } from "@/views/main/system/user/config/contentConfig"
import pageContent from "@/components/page-content"
// 导入PageModel页面
import pageModel from "@/components/page-model"
// 导入modelConfig
import { modelConfig } from "@/views/main/system/user/config/modelConfig"

import { usePageSearch } from "@/hooks/usePageSearch"
export default defineComponent({
    name: "user",
    components: { pageSearch, pageContent, pageModel },
    setup() {
        const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearch()
        return {
            pageContentRef,
            searchFormConfig,
            contentTabelConfig,
            handleResetClick,
            handleQueryClick,
            modelConfig
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
