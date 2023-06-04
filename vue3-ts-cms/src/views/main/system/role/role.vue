<template>
    <div class="role">
        <div class="search">
            <page-search
                @resetBtnClick="handleResetClick"
                @queryBtnClick="handleQueryClick"
                :searchFormConfig="searchFormConfig"
            ></page-search>
        </div>
        <div class="content">
            <page-content
                :contentTabelConfig="contentTabelConfig"
                :page-name="'role'"
                @newBtnClick="handleNewClick"
                @editBtnClick="handleEditClick"
                ref="pageContentRef"
            ></page-content>
        </div>
        <page-model :pageName="'role'" :defaultInfo="defaultInfo" :modelConfig="modelConfig" ref="pageModelRef">
            <div class="menu-tree">
                <el-tree
                    :data="$store.state.login.userMenus"
                    show-checkbox
                    node-key="id"
                    :props="{ children: 'children', label: 'name' }"
                    @check="handleCheckChange"
                />
            </div>
        </page-model>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageSearch from "@/components/page-search"
import pageContent from "@/components/page-content"
import { contentTabelConfig } from "@/views/main/system/role/config/contentConfig"
import { searchFormConfig } from "@/views/main/system/role/config/searchConfig"
// 弹窗组件引用
import pageModel from "@/components/page-model"
import { modelConfig } from "@/views/main/system/role/config/modelConfig"
// 引用弹窗hooks
import { usePageModel } from "@/hooks/usePageModel"
import { usePageSearch } from "@/hooks/usePageSearch"
export default defineComponent({
    components: { pageSearch, pageContent, pageModel },
    name: "role",
    setup() {
        const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearch()
        const { handleNewClick, handleEditClick, pageModelRef, defaultInfo } = usePageModel()
        // el-tree选择
        const handleCheckChange = (data1: any, data2: any) => {
            const checkedKeys = data2.checkedKeys
            const halfCheckedKeys = data2.halfCheckedKeys
            const menuList = { ...checkedKeys, ...halfCheckedKeys }
            console.log(menuList) // 拿到用户选择的东西
        }
        return {
            contentTabelConfig,
            searchFormConfig,
            modelConfig,
            handleNewClick,
            handleEditClick,
            pageModelRef,
            defaultInfo,
            handleResetClick,
            handleQueryClick,
            pageContentRef,
            handleCheckChange
        }
    }
})
</script>

<style scoped lang="less">
:global(.el-button) {
    border-radius: 0;
}
.content {
    padding: 5px 20px;
    border-top: 8px solid #f5f5f5;
}
.menu-tree {
    margin-left: 24px;
}
</style>
