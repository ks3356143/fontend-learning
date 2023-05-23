<template>
    <div class="page-model">
        <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
            <chen-form v-model="formData" v-bind="modelConfig"></chen-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确认</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import chenForm from "@/base-ui/form"

export default defineComponent({
    components: { chenForm },
    props: {
        modelConfig: {
            type: Object,
            required: true
        }
    },
    setup() {
        const dialogVisible = ref(true)
        const formData = ref({})
        return { dialogVisible, formData }
    }
})
</script>

<style scoped></style>
