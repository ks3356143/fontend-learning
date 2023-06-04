<template>
    <div class="dashboard">
        <el-row :gutter="10" class="content-row">
            <el-col :span="7">
                <chen-card title="分类项目数据">
                    <pieEchart :pieData="categoryGoodsCount"></pieEchart>
                </chen-card>
            </el-col>
            <el-col :span="10"><chen-card title="不同城市项目数据"></chen-card></el-col>
            <el-col :span="7">
                <chen-card title="分类项目数据">
                    <roseEchart :roseData="categoryGoodsCount"></roseEchart>
                </chen-card>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="12">
                <chen-card title="分类项目数量">
                    <lineEchart v-bind="categoryGoodsSale"></lineEchart>
                </chen-card>
            </el-col>
            <el-col :span="12">
                <chen-card title="分类项目的人数">
                    <barEchart v-bind="categoryGoodsFavor"></barEchart>
                </chen-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    name: "dashboard"
})
</script>
<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "vuex"
import chenCard from "@/base-ui/card"
import { pieEchart, roseEchart, lineEchart, barEchart } from "@/components/page-echarts"
// ~~~~~~~~~~~~~~~~~~~~~~
// 在页面创建时发生网络请求
const store = useStore()
store.dispatch("dashboard/getDashboardDataAction")
// pieEchart数据
const categoryGoodsCount = computed(() => {
    return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
    })
})
// 获取左下角数据
const categoryGoodsSale = computed(() => {
    const xLabels: string[] = []
    const value: any[] = []
    const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
    for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        value.push(item.goodsCount)
    }
    return { xLabels, value }
})
// 获取右下数据
const categoryGoodsFavor = computed(() => {
    const xLabels: string[] = []
    const value: number[] = []
    const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
    for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        value.push(item.goodsCount)
    }
    return { xLabels, value }
})
</script>

<style scoped>
.content-row {
    margin-bottom: 20px;
}
</style>
