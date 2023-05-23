import { ITableConfig } from "@/base-ui/table/types"
export const contentTabelConfig: ITableConfig = {
    title: "商品列表",
    propList: [
        { prop: "name", label: "商品名称", minWidth: "80" },
        { prop: "oldPrice", label: "原价格", minWidth: "80", slotName: "oldPrice" },
        { prop: "newPrice", label: "现价格", minWidth: "80", slotName: "oldPrice" },
        { prop: "status", label: "状态", minWidth: "60", slotName: "enable" },
        { prop: "imgUrl", label: "商品图片", minWidth: "100", slotName: "imgUrl" },
        { prop: "createAt", label: "创建时间", minWidth: "130", slotName: "createAt" },
        { prop: "updateAt", label: "更新时间", minWidth: "130", slotName: "updateAt" },
        { prop: "", label: "操作", minWidth: "120px", slotName: "handle" }
    ],
    showIndexColumn: true,
    showSelectColumn: true
}
