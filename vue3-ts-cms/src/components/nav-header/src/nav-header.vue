<template>
    <div class="nav-header">
        <el-icon class="fold-menu" :size="30" @click="handleFoldClick">
            <component :is="isFold ? 'Expand' : 'Fold'"></component>
        </el-icon>
        <div class="content">
            <div>面包屑</div>
            <user-info></user-info>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { Expand, Fold } from "@element-plus/icons-vue"
import UserInfo from "@/components/nav-header/src/user-info.vue"

export default defineComponent({
    emits: ["foldChange"],
    components: { UserInfo, Fold, Expand },
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
.nav-header {
    display: flex;
    width: 100%;
    .fold-menu {
        cursor: pointer;
    }

    .content {
        display: flex;
        flex: 1; // 占用剩余所有部分
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
