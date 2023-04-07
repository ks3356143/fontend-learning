<template>
    <div>
        <hr>
        <h2>总价格：{{ $store.getters.totalPriceCountGreaterN(1) }}</h2>
        <hr>
        getter的nameInfo为：{{ nameInfo }}
        getter的ageInfo为：{{ ageInfo }}
    </div>
</template>

<script>
import { useGetters } from '../hooks/index.js'
export default {
    setup(props, { attrs, slots, emits }) {
        const storeGetters = useGetters(['nameInfo', 'ageInfo'])
        return {
            ...storeGetters
        }
    },
}
</script>

<style scoped></style>