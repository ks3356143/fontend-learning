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
        label: "商品名称",
        placeholder: "请输入用户名"
    },
    {
        field: "oldPrice",
        type: "input",
        label: "原价格",
        placeholder: "请输入原价格"
    },
    {
        field: "desc",
        type: "input",
        label: "描述搜索",
        placeholder: "请输入描述"
    },
    {
        field: "address",
        type: "input",
        label: "地址",
        placeholder: "请选择地址"
    },
    {
        field: "createAt",
        type: "datepicker",
        label: "创建时间",
        otherOption: {
            startPlaceholder: "开始时间",
            endPlaceholder: "结束时间",
            type: "daterange"
        }
    }
]
