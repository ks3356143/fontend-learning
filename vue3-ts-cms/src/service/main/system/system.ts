import chenRequest from "@/service/index"
import { IDataType } from "@/service/login/types"

export function getPageListData(url: string, queryInfo: any) {
    return chenRequest.post({
        url: url,
        data: queryInfo
    })
}
// url样子:/users/id
export function deletePageData(url: string) {
    return chenRequest.delete<IDataType>({
        url: url
    })
}

// 新建逻辑
export function createPageData(url: string, newData: any) {
    return chenRequest.post<IDataType>({
        url: url,
        data: newData
    })
}

// 编辑逻辑
export function editPageData(url: string, editData: any) {
    return chenRequest.post<IDataType>({
        url: url,
        data: editData
    })
}
