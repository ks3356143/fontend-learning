import * as echarts from "echarts"

export default function (el: HTMLElement) {
    const echartInstance = echarts.init(el, undefined, { renderer: "svg" })
    const setOptions = (option: echarts.EChartsOption) => {
        echartInstance.setOption(option)
    }
    window.addEventListener("resize", () => {
        echartInstance.resize()
    })
    const echartResize = () => {
        echartInstance.resize()
    }
    return { echartInstance, setOptions, echartResize }
}
