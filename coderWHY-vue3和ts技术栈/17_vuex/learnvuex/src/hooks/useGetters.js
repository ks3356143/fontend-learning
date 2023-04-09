import { useMappper } from "./useMapper.js"
import { mapGetters, createNamespacedHelpers } from "vuex"
export function useGetters(moduleName, arrayParams) {
    let mapperFn = mapGetters
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapGetters
    } else {
        arrayParams = moduleName
    }
    return useMappper(arrayParams, mapperFn)
}