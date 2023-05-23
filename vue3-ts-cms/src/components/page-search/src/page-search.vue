<template>
    <div class="page-search">
        <chenForm :form-items="searchFormConfig" :labelWidth="labelWidth" v-model="formData">
            <template #header>
                <p class="form-header">高级检索</p>
            </template>
            <template #footer>
                <div class="handleBtnCss">
                    <el-button type="primary" :icon="Refresh" @click="resetFormValueClick">重置</el-button>
                    <el-button type="primary" :icon="Search" @click="handleQueryClick">搜索</el-button>
                </div>
            </template>
        </chenForm>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue"
import chenForm from "@/base-ui/form"
import { Search, Refresh } from "@element-plus/icons-vue"
import type { IFormItem } from "@/base-ui/form/types"

export default defineComponent({
    emits: ["resetBtnClick", "queryBtnClick"],
    props: {
        searchFormConfig: {
            type: Array as PropType<IFormItem[]>,
            required: true
        }
    },
    components: { chenForm },
    setup(props, { emit }) {
        const labelWidth = "100px"
        // 初始化formData，从Config过来
        const formItem = props.searchFormConfig ?? ""
        const formOriginData: any = {}
        for (const item of formItem) {
            formOriginData[item.field] = ""
        }
        const formData = ref(formOriginData)
        // 重置按钮函数
        const resetFormValueClick = () => {
            formData.value = formOriginData
            emit("resetBtnClick")
        }
        // 用户点击搜索
        const handleQueryClick = () => {
            emit("queryBtnClick", formData.value)
        }
        return { formData, Search, Refresh, labelWidth, resetFormValueClick, handleQueryClick }
    }
})
</script>

<style scoped>
.handleBtnCss {
    text-align: right;
    padding-bottom: 10px;
    padding-right: 10px;
}
.form-header {
    color: red;
}
</style>
