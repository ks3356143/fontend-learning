<template>
    <el-card>
        <template #header>
            <div class="card-header">
                <span>{{ title }}</span>
            </div>
        </template>
        <div class="item">
            <slot></slot>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue"
// 传入属性情况
const props = defineProps({
    title: {
        type: String,
        default: "默认标题"
    }
})
</script>

<style lang="less" scoped>
.box-card {
    &:deep(.el-card__header) {
        padding: 10px 20px !important;
    }
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
}
.tiem {
    margin-bottom: 10px;
}
</style>
