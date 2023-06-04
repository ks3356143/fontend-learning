import chenRequest from "@/service"

enum DashboardAPI {
    categoryGoodsCount = "/api/goods/category/count",
    categoryGoodsSale = "/api/goods/category/sale",
    categoryGoodsFavor = "/api/goods/category/favor",
    addressGoodsSale = "/api/goods/address/sale"
}

export function getCategoryGoodCount() {
    return chenRequest.get({
        url: DashboardAPI.categoryGoodsCount
    })
}
export function getCategoryGoodSale() {
    return chenRequest.get({
        url: DashboardAPI.categoryGoodsSale
    })
}
export function getcategoryGoodsFavor() {
    return chenRequest.get({
        url: DashboardAPI.categoryGoodsFavor
    })
}
export function getaddressGoodsSale() {
    return chenRequest.get({
        url: DashboardAPI.addressGoodsSale
    })
}
