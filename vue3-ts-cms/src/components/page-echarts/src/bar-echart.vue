<template>
    <div class="bar-echart">
        <baseEchart :option="barEchart"></baseEchart>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"
import * as echarts from "echarts"
import baseEchart from "@/base-ui/echart"
const props = defineProps<{
    xLabels: string[]
    value: number[]
}>()

const barEchart: any = computed(() => {
    return {
        xAxis: {
            data: props.xLabels, // 字符串数组
            axisLabel: {
                inside: true, // 文本在柱子里面
                color: "#fff"
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#999"
            }
        },
        dataZoom: [
            {
                type: "inside" // 缩放
            }
        ],
        series: [
            {
                type: "bar",
                showBackground: true,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#83bff6" },
                        { offset: 0.5, color: "#188df0" },
                        { offset: 1, color: "#188df0" }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "#2378f7" },
                            { offset: 0.7, color: "#2378f7" },
                            { offset: 1, color: "#83bff6" }
                        ])
                    }
                },
                data: props.value //number[]
            }
        ]
    }
})
</script>

<style scoped></style>
