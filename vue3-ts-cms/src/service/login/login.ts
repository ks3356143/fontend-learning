import chenRequest from "@/service/index"
import { IAccount, ILoginResult, IDataType } from "@/service/login/types"

enum LoginAPI {
    AccountLogin = "/api/login",
    LoginUserInfo = "/api/users/", // 用法：users/<ID>
    UserMenus = "/api/role" // 用法：role/<ID>/menu
}
export function accountLoginRequest(account: IAccount) {
    return chenRequest.post<IDataType<ILoginResult>>({
        url: LoginAPI.AccountLogin,
        data: account
    })
}

export function requestUserInfoById(id: number) {
    return chenRequest.get<IDataType>({
        url: LoginAPI.LoginUserInfo + id,
        showLoading: false
    })
}
