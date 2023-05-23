<template>
    <div class="page-content">
        <chen-table
            @selection-change="handleSelectionChange"
            :listCount="dataCount"
            :listData="dataList"
            v-model:page="pageInfo"
            v-bind="contentTabelConfig"
        >
            <!-- 1.header插槽 -->
            <template #handler>
                <el-button type="primary">新建条目</el-button>
                <el-button :icon="RefreshLeft" color="#588f27"></el-button>
            </template>
            <!-- 2.列中的插槽-固定 -->
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
            <template #handle="slotProps">
                <div class="handle-btns">
                    <el-button size="small" color="#626aef">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDeleteClick(slotProps.row)">删除</el-button>
                </div>
            </template>
            <!-- 在page-content动态插入排除上面写死的插槽后的插槽 -->
            <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName!]="slotProps">
                <template v-if="item.slotName">
                    <slot :name="item.slotName" :row="slotProps.row"></slot>
                </template>
            </template>
        </chen-table>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref, watch } from "vue"
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
        const store = useStore()
        // 双向绑定pageInfo
        const pageInfo = ref({ currentPage: 1, pageSize: 10 })
        // 网络请求，调用它就发生请求
        const getPageData = (queryInfo: any = {}) => {
            store.dispatch("system/getPageList", {
                // pageUrl: "/api/user/list",
                pageName: props.pageName,
                queryInfo: {
                    offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
                    size: pageInfo.value.pageSize,
                    ...queryInfo
                }
            })
        }
        getPageData()
        // vuex获取数据
        const dataList = computed(() => store.getters[`system/pageListData`](props.pageName))
        // 分页器使用
        const dataCount = computed(() => store.getters[`system/pageListCount`](props.pageName))
        // 定义获取用户选择的选项
        const handleSelectionChange = (value: any) => {
            console.log(value)
        }
        watch(pageInfo, () => {
            getPageData()
        })
        // 获取其他动态插槽名称
        const otherPropSlots = props.contentTabelConfig?.propList.filter((item) => {
            if (item.slotName === "status") return false
            if (item.slotName === "createAt") return false
            if (item.slotName === "updateAt") return false
            if (item.slotName === "handle") return false
            return true
        })
        // 删除操作
        const handleDeleteClick = (item: any) => {
            console.log(item)
            store.dispatch("system/deletePageDataAction", {
                pageName: props.pageName,
                id: item.id
            })
        }
        return {
            handleDeleteClick,
            getPageData,
            RefreshLeft,
            handleSelectionChange,
            dataList,
            dataCount,
            pageInfo,
            otherPropSlots
        }
    }
})
</script>

<style scoped></style>
