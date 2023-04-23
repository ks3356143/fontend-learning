import chenRequest from "@/service/index"
import { IAccount } from "@/service/login/types"

enum LoginAPI {
    AccountLogin = "/login/"
}
export function accountLoginRequest(account: IAccount) {
    return chenRequest.post<any>({
        url: LoginAPI.AccountLogin,
        data: account
    })
}
