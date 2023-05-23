<template>
    <div class="goods">
        <div class="search">
            <page-search
                :searchFormConfig="searchFormConfig"
                @resetBtnClick="handleResetClick"
                @queryBtnClick="handleQueryClick"
            ></page-search>
        </div>
        <div class="content">
            <page-content ref="pageContentRef" :content-tabel-config="contentTabelConfig" page-name="goods">
                <template #imgUrl="slotProps">
                    <el-image
                        style="width: 60px; height: 70px"
                        :src="slotProps.row.imgUrl"
                        :zoom-rate="1.2"
                        :preview-src-list="[slotProps.row.imgUrl]"
                        fit="cover"
                        :preview-teleported="true"
                    />
                </template>
                <template #oldPrice="slotProps">
                    {{ "￥" + slotProps.row.oldPrice }}
                </template>
                <template #newPrice="slotProps">
                    {{ "￥" + slotProps.row.newPrice }}
                </template>
            </page-content>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    name: "goods"
})
</script>
<script setup lang="ts">
import PageContent from "@/components/page-content"
import pageSearch from "@/components/page-search"
import { contentTabelConfig } from "@/views/main/product/goods/config/contentConfig"
import { searchFormConfig } from "@/views/main/product/goods/config/searchConfig"
import { usePageSearch } from "@/hooks/usePageSearch"
const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearch()
</script>

<style scoped></style>
