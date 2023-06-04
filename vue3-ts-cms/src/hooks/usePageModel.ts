import { ref } from "vue"
import pageModel from "@/components/page-model"

type CallbackFn = () => void

export function usePageModel(newCallback?: CallbackFn, editCallback?: CallbackFn) {
    // 拿到page-model.vue中打开弹窗的boolean变量
    const pageModelRef = ref<InstanceType<typeof pageModel>>()
    // 处理新建和编辑事件
    // 定义默认给page-model.vue默认初始化的值
    const defaultInfo = ref({})
    const handleNewClick = () => {
        // 新建需要初始化空，更改为el-dialog中destroy-on-close处理
        defaultInfo.value = {}
        if (pageModelRef.value) {
            pageModelRef.value.dialogVisible = true
        }
        // 调用是否修改隐藏字段
        newCallback && newCallback()
    }
    const handleEditClick = (item: any) => {
        console.log("点击了编辑按钮:", item)
        defaultInfo.value = { ...item }
        if (pageModelRef.value) {
            pageModelRef.value.dialogVisible = true
        }
        // 调用是否修改隐藏字段
        editCallback && editCallback()
    }
    return { handleNewClick, handleEditClick, pageModelRef, defaultInfo }
}
