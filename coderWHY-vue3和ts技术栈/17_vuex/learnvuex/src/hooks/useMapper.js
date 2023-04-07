import { useStore } from 'vuex'
import { computed } from 'vue'
export function useMappper(mapper, mapFn) {
    // 拿到store独享
    const store = useStore()
    // 获取对应function
    const storeStateFns = mapFn(mapper)
    const storeState = {}
    Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({ $store: store })
        storeState[fnKey] = computed(fn)
    })
    return storeState
}