import { ITableConfig } from "@/base-ui/table/types"
export const contentTabelConfig: ITableConfig = {
    title: "角色列表",
    propList: [
        { prop: "name", label: "角色名称", minWidth: "100", slotName: "name" },
        { prop: "introduce", label: "权限介绍", minWidth: "150", slotName: "introduce" },
        { prop: "createAt", label: "创建时间", minWidth: "130", slotName: "createAt" },
        { prop: "", label: "操作", minWidth: "120px", slotName: "handle" }
    ],
    showIndexColumn: true,
    showSelectColumn: true
}
