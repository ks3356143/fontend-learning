<template>
    <div class="page-model">
        <el-dialog destroy-on-close v-model="dialogVisible" title="新建用户" width="30%" center>
            <chen-form v-model="formData" v-bind="modelConfig"></chen-form>
            <slot></slot>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="handleConfirmClick">确认</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import chenForm from "@/base-ui/form"
import { useStore } from "vuex"

export default defineComponent({
    components: { chenForm },
    props: {
        pageName: {
            type: String,
            required: true
        },
        modelConfig: {
            type: Object,
            required: true
        },
        defaultInfo: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props) {
        const dialogVisible = ref(false)
        const formData = ref<any>({})
        // 监听父组件编辑，编辑回显
        watch(
            () => props.defaultInfo,
            (newValue) => {
                for (const item of props.modelConfig.formItems) {
                    formData.value[item.field] = newValue[item.field]
                }
            }
        )
        // 点击确定按钮的逻辑
        const store = useStore()
        const handleConfirmClick = () => {
            dialogVisible.value = false
            // 根据defaultInfo中设置值，如果新建是空对象
            if (Object.keys(props.defaultInfo).length) {
                // 编辑
                store.dispatch("system/editPageDataAction", {
                    pageName: props.pageName,
                    editData: { ...formData.value },
                    id: props.defaultInfo.id
                })
            } else {
                // 新建
                store.dispatch("system/createPageDataAction", {
                    pageName: props.pageName,
                    newData: { ...formData.value }
                })
            }
        }
        return { dialogVisible, formData, handleConfirmClick }
    }
})
</script>

<style scoped></style>
