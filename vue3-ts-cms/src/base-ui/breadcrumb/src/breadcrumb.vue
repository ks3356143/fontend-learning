<template>
    <div class="bread-crumb">
        <el-breadcrumb separator="|">
            <template v-for="item in breadcrumbs" :key="item.name">
                <el-breadcrumb-item class="breadcrumb-item">{{ item.name }}</el-breadcrumb-item>
            </template>
        </el-breadcrumb>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import type { IBreadcrumb } from "@/base-ui/breadcrumb/types"

export default defineComponent({
    props: {
        breadcrumbs: {
            type: Array as PropType<IBreadcrumb[]>,
            default: () => []
        }
    },
    setup() {
        return {}
    }
})
</script>

<style scoped>
.breadcrumb-item {
    font-weight: 600;
}
</style>
