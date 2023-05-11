export interface ITableProp {
    prop: string
    label: string
    minWidth?: string
    slotName?: string
}

export interface ITableConfig {
    title?: string
    propList: ITableProp[]
    showIndexColumn?: boolean
    showSelectColumn?: boolean
}
