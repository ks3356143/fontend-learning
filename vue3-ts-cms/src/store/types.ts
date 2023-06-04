import { ILoginState } from "@/store/login/types"
import { ISystemState } from "./main/system/types"
import { IDashboardState } from "@/store/analysis/types"
// 对vuex的state进行限制，最好指定类型
export interface IRootState {
    entireDepartment: any[]
    entireRole: any[]
}

export interface IRootWithModule {
    login: ILoginState
    system: ISystemState
    dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
