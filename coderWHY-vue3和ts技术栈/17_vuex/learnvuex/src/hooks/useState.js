import { useMappper } from "./useMapper.js"
import { mapState } from "vuex"
export function useState(arrayParams) {
    return useMappper(arrayParams, mapState)
}