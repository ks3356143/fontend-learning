import { useMappper, createNamespacedHelper } from "./useMapper.js"
import { mapState } from "vuex"
export function useState(moduleName, arrayParams) {
    let mapperFn = mapState
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFn = createNamespacedHelper(moduleName).mapState
    } else {
        arrayParams = moduleName
    }
    return useMappper(arrayParams, mapperFn)
}