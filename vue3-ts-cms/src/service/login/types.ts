export interface IAccount {
    name: string
    password: string
}

export interface ILoginResult {
    id: number
    name: string
    token: string
}
// 注意后端对应IDataType
export interface IDataType<T = any> {
    code: number
    data: T
}
