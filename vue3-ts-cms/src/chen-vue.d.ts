import { Store } from "@/store"
declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $store: Store
    }
}

declare const VUE_APP_BASE_NAME: string
declare const VUE_APP_BASE_URL: string
