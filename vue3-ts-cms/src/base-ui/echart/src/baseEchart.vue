<template>
    <div class="baseEchart">
        <div ref="echartRef" :style="{ width: width, height: height }"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watchEffect } from "vue"
import { EChartsOption } from "echarts"
import useEchart from "@/base-ui/echart/hooks/useEchart"
const props = withDefaults(
    defineProps<{
        width?: string
        height?: string
        option: EChartsOption
    }>(),
    {
        width: "100%",
        height: "360px"
    }
)
const echartRef = ref()
onMounted(() => {
    const { setOptions } = useEchart(echartRef.value)
    watchEffect(() => {
        setOptions(props.option)
    })
})
</script>

<style scoped lang="less"></style>
