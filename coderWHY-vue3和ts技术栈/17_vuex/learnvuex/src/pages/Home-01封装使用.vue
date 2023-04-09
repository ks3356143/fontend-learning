<template>
    <div>
        <h2>Home:{{ $store.state.counter }}</h2>
        <h2>Home:{{ counter }}</h2>
        <hr>
        <h2>使用mapState辅助：{{ name }}</h2>
        <hr>
    </div>
</template>

<script>
import { useState } from '../hooks/useState.js'
export default {
    setup() {
        // 我最后达到效果是，拿到state全部数据
        const storeState = useState(['name', 'counter'])


        return {
            ...storeState
        }
    }
}
</script>

<style lang="scss" scoped></style>