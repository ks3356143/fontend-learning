import { ITableConfig } from "@/base-ui/table/types"
export const contentTabelConfig: ITableConfig = {
    title: "菜单列表",
    propList: [
        { prop: "name", label: "菜单名称", minWidth: "100" },
        { prop: "type", label: "类型", minWidth: "60" },
        { prop: "url", label: "菜单URL", minWidth: "80" },
        { prop: "icon", label: "菜单图标", minWidth: "100" },
        { prop: "permission", label: "权限", minWidth: "100" },
        { prop: "createAt", label: "创建时间", minWidth: "130", slotName: "createAt" },
        { prop: "updateAt", label: "更新时间", minWidth: "130", slotName: "updateAt" },
        { prop: "", label: "操作", minWidth: "120px", slotName: "handle" }
    ],
    showIndexColumn: false,
    showSelectColumn: false,
    childrenProps: { rowKey: "id", treeProp: { children: "children" } }
}
