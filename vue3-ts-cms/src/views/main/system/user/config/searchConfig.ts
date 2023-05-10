import { IFormItem } from "@/base-ui/form"
export const searchFormConfig: IFormItem[] = [
    {
        field: "id",
        type: "input",
        label: "ID",
        placeholder: "请输入唯一编号"
    },
    {
        field: "name",
        type: "input",
        label: "用户名",
        placeholder: "请输入用户名"
    },
    {
        field: "password",
        type: "password",
        label: "密码",
        placeholder: "请输入密码"
    },
    {
        field: "sport",
        type: "select",
        label: "喜欢的运动",
        placeholder: "请选择喜欢的运动",
        options: [
            { title: "篮球", value: "basketball" },
            { title: "足球", value: "football" }
        ]
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
