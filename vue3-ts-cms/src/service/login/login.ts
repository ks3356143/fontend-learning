import chenRequest from "@/service/index"
import { IAccount, ILoginResult, IDataType } from "@/service/login/types"

enum LoginAPI {
    AccountLogin = "/login/",
    LoginUserInfo = "/users/", // 用法：users/<ID>
    UserMenus = "/role/" // 用法：role/<ID>/menu
}
export function accountLoginRequest(account: IAccount) {
    return chenRequest.post<IDataType<ILoginResult>>({
        url: LoginAPI.AccountLogin,
        data: account
    })
}

export function requestUserInfoById(id: number) {
    return chenRequest.get<IDataType>({
        url: LoginAPI.LoginUserInfo + id + "/",
        showLoading: false
    })
}
