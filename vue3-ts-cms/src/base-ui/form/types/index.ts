type IFormType = "input" | "password" | "select" | "datepicker"

export interface IFormItem {
    field: string
    type: IFormType
    label: string
    rules?: any[]
    placeholder?: any
    // 针对select
    options?: any[]
    // 针对特殊的
    otherOption?: any
    // 针对隐藏字段
    isHidden?: boolean
}
