import { useMappper } from "./useMapper.js"
import { mapGetters } from "vuex"
export function useGetters(arrayParams) {
    return useMappper(arrayParams, mapGetters)
}