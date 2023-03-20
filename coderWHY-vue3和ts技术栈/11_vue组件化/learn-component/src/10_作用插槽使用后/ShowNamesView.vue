<template>
    <div>
        <template v-for="item,index in names" :key="item">
            <slot :item="item" :index="index"></slot>
        </template>
    </div>
</template>

<script>
export default {
    props:{
        names:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
span{
    padding: 0 10px;
}
</style>