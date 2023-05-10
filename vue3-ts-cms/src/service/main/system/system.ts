import chenRequest from "@/service/index"

export function getPageListData(url: string, queryInfo: any) {
    return chenRequest.post({
        url: url,
        data: queryInfo
    })
}
