<template>
    <div class="line-echart">
        <baseEchart :option="lineEchart"></baseEchart>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"
import baseEchart from "@/base-ui/echart"
const props = defineProps<{
    xLabels: string[]
    value: any[]
}>()
const lineEchart: any = computed(() => {
    return {
        tooltip: {
            trigger: "axis"
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: props.xLabels // 数组
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                name: "项目分类数据",
                type: "line",
                stack: "Total",
                data: props.value // 数组和上对应
            }
        ]
    }
})
</script>

<style scoped></style>
