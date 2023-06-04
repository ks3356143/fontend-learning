import { Module } from "vuex"
import { IRootState } from "../types"
import { IDashboardState } from "./types"
import {
    getCategoryGoodCount,
    getCategoryGoodSale,
    getcategoryGoodsFavor,
    getaddressGoodsSale
} from "@/service/analysis/dashboard"
const dashboardModule: Module<IDashboardState, IRootState> = {
    namespaced: true,
    state() {
        return {
            categoryGoodsCount: [],
            categoryGoodsSale: [],
            categoryGoodsFavor: [],
            addressGoodsSale: []
        }
    },
    mutations: {
        changeCategoryGoodsCount(state, payload) {
            state.categoryGoodsCount = payload.data
        },
        changeCategoryGoodsSale(state, payload) {
            state.categoryGoodsSale = payload.data
        },
        changeCategoryGoodsFavor(state, payload) {
            state.categoryGoodsFavor = payload.data
        },
        changeAddressGoodsSale(state, payload) {
            state.addressGoodsSale = payload.data
        }
    },
    actions: {
        async getDashboardDataAction({ commit }) {
            const categoryCountResult = await getCategoryGoodCount()
            commit("changeCategoryGoodsCount", categoryCountResult)
            const categorySaleResult = await getCategoryGoodSale()
            commit("changeCategoryGoodsSale", categorySaleResult)
            const categoryFavorResult = await getcategoryGoodsFavor()
            commit("changeCategoryGoodsFavor", categoryFavorResult)
            const categoryAddressSaleResult = await getaddressGoodsSale()
            commit("changeAddressGoodsSale", categoryAddressSaleResult)
        }
    }
}

export default dashboardModule
