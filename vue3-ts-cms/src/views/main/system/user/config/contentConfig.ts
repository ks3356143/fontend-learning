import { ITableConfig } from "@/base-ui/table/types"
export const contentTabelConfig: ITableConfig = {
    title: "用户列表",
    propList: [
        { prop: "name", label: "用户名", minWidth: "100" },
        { prop: "realname", label: "真实姓名", minWidth: "100" },
        { prop: "cellphone", label: "电话", minWidth: "100" },
        { prop: "status", label: "状态", minWidth: "100", slotName: "status" },
        { prop: "department", label: "部门", minWidth: "100", slotName: "department" },
        { prop: "createAt", label: "创建时间", minWidth: "130", slotName: "createAt" },
        { prop: "updateAt", label: "更新时间", minWidth: "130", slotName: "updateAt" },
        { prop: "", label: "操作", minWidth: "120px", slotName: "handle" }
    ],
    showIndexColumn: true,
    showSelectColumn: true
}
