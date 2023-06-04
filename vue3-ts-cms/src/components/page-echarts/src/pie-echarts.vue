<template>
    <div class="pie-echarts">
        <baseEchart :option="pieOption"></baseEchart>
    </div>
</template>

<script setup lang="ts">
import baseEchart from "@/base-ui/echart"
import { defineProps, computed } from "vue"
import type { IPieData } from "@/components/page-echarts/types"
const props = defineProps<{
    pieData: IPieData[]
}>()
const pieOption: any = computed(() => {
    return {
        // 哪些数据是不想写死的
        tooltip: {
            trigger: "item"
        },
        legend: {
            orient: "horizontal",
            left: "left"
        },
        series: [
            {
                name: "Access From",
                type: "pie",
                radius: "50%",
                data: props.pieData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }
        ]
    }
})
</script>

<style scoped></style>
