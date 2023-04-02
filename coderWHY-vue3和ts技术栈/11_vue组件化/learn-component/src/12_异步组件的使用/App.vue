<template>
    <div>
        App根组件
        <home></home>
        <suspense>
            <template #default>
                    <async-category></async-category>
            </template>
            <template #fallback>
                <Loading></Loading>
            </template>   
        </suspense>
    </div>
</template>

<script>
import Loading from './Loading.vue'
// import Error from './Error.vue'
import { defineAsyncComponent } from 'vue'
const AsyncCategory = defineAsyncComponent(()=>import('./AsyncCategory.vue'))

import Home from './Home.vue'

export default {
    components: { Home, AsyncCategory,Loading }
}
</script>

<style scoped></style>