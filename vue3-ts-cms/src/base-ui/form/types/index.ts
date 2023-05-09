type IFormType = "input" | "password" | "select" | "datepicker"

export interface IFormItem {
    type: IFormType
    label: string
    rules?: any[]
    placeholder?: any
    // 针对select
    options?: any[]
    // 针对特殊的
    otherOption?: any
}