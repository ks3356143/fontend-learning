<template>
    <div class="nav-header">
        <el-icon class="fold-menu" :size="30" @click="handleFoldClick">
            <component :is="isFold ? 'Expand' : 'Fold'"></component>
        </el-icon>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { Expand, Fold } from "@element-plus/icons-vue"

export default defineComponent({
    emits: ["foldChange"],
    components: { Fold, Expand },
    setup(props, { emit }) {
        const isFold = ref<boolean>(false)
        const handleFoldClick = () => {
            isFold.value = !isFold.value
            emit("foldChange", isFold.value)
        }
        return { handleFoldClick, isFold }
    }
})
</script>

<style scoped lang="less">
.fold-menu {
    cursor: pointer;
}
</style>
