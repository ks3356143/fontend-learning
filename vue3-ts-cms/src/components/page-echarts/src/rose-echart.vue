<template>
    <div class="rose-echart">
        <baseEchart :option="roseEchart"></baseEchart>
    </div>
</template>

<script setup lang="ts">
import baseEchart from "@/base-ui/echart"
import { defineProps, computed } from "vue"
import type { IPieData } from "@/components/page-echarts/types"
const props = defineProps<{
    roseData: IPieData[]
}>()
const roseEchart: any = computed(() => {
    return {
        legend: {
            top: "top"
        },
        series: [
            {
                name: "玫瑰图",
                type: "pie",
                radius: [10, 60],
                center: ["50%", "50%"],
                roseType: "area",
                itemStyle: {
                    borderRadius: 1
                },
                data: props.roseData
            }
        ]
    }
})
</script>

<style scoped></style>
