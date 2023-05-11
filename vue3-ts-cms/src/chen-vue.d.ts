import { Store } from "@/store"
declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $store: Store
        $filter: any
    }
}

declare const VUE_APP_BASE_NAME: string
declare const VUE_APP_BASE_URL: string
