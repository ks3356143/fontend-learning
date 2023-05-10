import { ILoginState } from "@/store/login/types"
import { ISystemState } from "./main/system/types"
// 对vuex的state进行限制，最好指定类型
export interface IRootState {
    name: string
    age: number
}

export interface IRootWithModule {
    login: ILoginState
    system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
