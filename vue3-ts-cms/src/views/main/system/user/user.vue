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
                @newBtnClick="handleNewClick"
                @editBtnClick="handleEditClick"
            ></page-content>
        </div>
        <page-model
            :pageName="'user'"
            :defaultInfo="defaultInfo"
            :model-config="modelConfigRef"
            ref="pageModelRef"
        ></page-model>
    </div>
</template>

<script lang="ts">
// 导入根store
import { useStore } from "vuex"
import { defineComponent, computed } from "vue"
import pageSearch from "@/components/page-search"
import { searchFormConfig } from "@/views/main/system/user/config/searchConfig"
import { contentTabelConfig } from "@/views/main/system/user/config/contentConfig"
import pageContent from "@/components/page-content"
// 导入PageModel页面
import pageModel from "@/components/page-model"
// 导入modelConfig
import { modelConfig } from "@/views/main/system/user/config/modelConfig"

import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModel } from "@/hooks/usePageModel"
export default defineComponent({
    name: "user",
    components: { pageSearch, pageContent, pageModel },
    setup() {
        // 初始化store
        const store = useStore()
        const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearch()
        // pageModel相关的hook逻辑
        // 1.处理密码逻辑
        const newCallback = () => {
            const passwordItem = modelConfig.formItems.find((item) => item.field === "password")
            passwordItem!.isHidden = false
        }
        const editCallback = () => {
            const passwordItem = modelConfig.formItems.find((item) => item.field === "password")
            passwordItem!.isHidden = true
        }
        // 2.动态添加部门和角色列表
        const modelConfigRef = computed(() => {
            const departmentItem = modelConfig.formItems.find((item) => item.field === "departmentId")
            departmentItem!.options = store.state.entireDepartment.map((item: any) => {
                return { title: item.name, value: item.id }
            })
            const roleItem = modelConfig.formItems.find((item) => item.field === "roleId")
            roleItem!.options = store.state.entireRole.map((item: any) => {
                return { title: item.name, value: item.id }
            })
            return modelConfig
        })

        // 3.调用hook获取公共变量和函数
        const { handleNewClick, handleEditClick, pageModelRef, defaultInfo } = usePageModel(newCallback, editCallback)
        return {
            pageContentRef,
            searchFormConfig,
            contentTabelConfig,
            handleResetClick,
            handleQueryClick,
            modelConfigRef,
            handleNewClick,
            handleEditClick,
            pageModelRef,
            defaultInfo
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
