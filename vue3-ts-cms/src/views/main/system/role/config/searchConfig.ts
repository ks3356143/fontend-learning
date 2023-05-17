import { IFormItem } from "@/base-ui/form"
export const searchFormConfig: IFormItem[] = [
    {
        field: "name",
        type: "input",
        label: "角色名称",
        placeholder: "请输入角色名称"
    },
    {
        field: "introduce",
        type: "input",
        label: "角色介绍",
        placeholder: "请输入角色介绍"
    },
    {
        field: "createTime",
        type: "datepicker",
        label: "创建时间",
        otherOption: {
            startPlaceholder: "开始时间",
            endPlaceholder: "结束时间",
            type: "daterange"
        }
    }
]
