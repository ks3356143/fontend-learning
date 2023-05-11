<template>
    <div class="page-content">
        <chen-table @selection-change="handleSelectionChange" :listData="userList" v-bind="contentTabelConfig">
            <!-- 1.header插槽 -->
            <template #handler>
                <el-button type="primary">新建用户</el-button>
                <el-button :icon="RefreshLeft" color="#588f27"></el-button>
            </template>
            <!-- 2.列中的插槽 -->
            <template #enable="slotProps">
                <el-button plain size="small" :type="slotProps.row.enable ? 'success' : 'danger'">
                    {{ slotProps.row.enable ? "启用" : "禁用" }}
                </el-button>
            </template>
            <template #createAt="slotProps">
                <strong>{{ $filter.formatTime(slotProps.row.createAt) }}</strong>
            </template>
            <template #updateAt="slotProps">
                <strong>{{ $filter.formatTime(slotProps.row.updateAt) }}</strong>
            </template>
            <template #handle>
                <div class="handle-btns">
                    <el-button size="small" color="#626aef">编辑</el-button>
                    <el-button size="small" type="danger">删除</el-button>
                </div>
            </template>
        </chen-table>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue"
// 导入图标组件
import { RefreshLeft } from "@element-plus/icons-vue"
import { useStore } from "vuex"
import chenTable from "@/base-ui/table"
import type { ITableConfig } from "@/base-ui/table/types"

export default defineComponent({
    components: { chenTable },
    props: {
        contentTabelConfig: {
            type: Object as PropType<ITableConfig>,
            required: true
        },
        pageName: {
            type: String,
            required: true
        }
    },
    setup(props) {
        // 请求用户列表
        const store = useStore()
        store.dispatch("system/getPageList", {
            // pageUrl: "/api/user/list",
            pageName: props.pageName,
            queryInfo: {
                offset: 0,
                size: 10
            }
        })
        const userList = computed(() => store.state.system.userList)
        // 分页器使用
        // const userCount = computed(() => store.state.system.userCount)
        //定义获取用户选择的选项
        const handleSelectionChange = (value: any) => {
            console.log(value)
        }
        return { RefreshLeft, handleSelectionChange, userList }
    }
})
</script>

<style scoped></style>
