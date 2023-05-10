<template>
    <div class="page-search">
        <chenForm :form-items="searchFormConfig" :labelWidth="labelWidth" v-model="formData">
            <template #header>
                <p class="form-header">高级检索</p>
            </template>
            <template #footer>
                <div class="handleBtnCss">
                    <el-button type="primary" :icon="Refresh">重置</el-button>
                    <el-button type="primary" :icon="Search">搜索</el-button>
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
    props: {
        searchFormConfig: {
            type: Array as PropType<IFormItem[]>,
            required: true
        }
    },
    components: { chenForm },
    setup() {
        const labelWidth = "100px"
        const formData = ref({
            id: "",
            name: "",
            password: "",
            sport: "",
            createTime: ""
        })
        return { formData, Search, Refresh, labelWidth }
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
