<template>
    <div class="chen-table">
        <!-- 由使用者决定header长什么样子 -->
        <div class="header">
            <slot name="header">
                <div class="title">{{ title }}</div>
                <div class="handler">
                    <slot name="handler"></slot>
                </div>
            </slot>
        </div>
        <el-table @selection-change="handleSelectionChange" :data="listData" border style="width: 100%">
            <el-table-column v-if="showSelectColumn" min-width="40px" type="selection" align="center"></el-table-column>
            <el-table-column
                v-if="showIndexColumn"
                min-width="60px"
                type="index"
                align="center"
                label="序号"
            ></el-table-column>
            <template v-for="propItem in propList" :key="propItem.prop">
                <el-table-column v-bind="propItem" align="center">
                    <template #default="scope">
                        <slot :name="propItem.slotName" :row="scope.row">{{ scope.row[propItem.prop] }}</slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <div class="footer">
            <el-pagination
                v-model:current-page="currentPage4"
                v-model:page-size="pageSize4"
                :page-sizes="[100, 200, 300, 400]"
                :small="small"
                :disabled="disabled"
                :background="background"
                layout="->,total, sizes, prev, pager, next, jumper"
                :total="400"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import type { ITableProp } from "@/base-ui/table/types"

export default defineComponent({
    emits: ["selection-change"],
    props: {
        title: {
            type: String,
            default: ""
        },
        listData: {
            type: Array,
            required: true
        },
        propList: {
            type: Array as PropType<ITableProp[]>,
            required: true
        },
        showIndexColumn: {
            type: Boolean,
            default: false
        },
        showSelectColumn: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        //选择项改变后，会传过来value
        const handleSelectionChange = (value: any) => {
            emit("selection-change", value)
        }
        return { handleSelectionChange }
    }
})
</script>

<style scoped lang="less">
.header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;
    .title {
        font-size: 15px;
        font-weight: 600;
    }
}
.footer {
    margin-top: 15px;
    .el-pagination {
        text-align: right;
    }
}
</style>
