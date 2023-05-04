import { ILoginState } from "@/store/login/types"
// 对vuex的state进行限制，最好指定类型
export interface IRootState {
    name: string
    age: number
}

export interface IRootWithModule {
    login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
