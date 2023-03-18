<template>
    <div>
        <tab-control :titles="titles" @change-tab="indexchange"></tab-control>
        <div class="h2">
            {{contents[currentIndex]}}
        </div>
    </div>
</template>

<script>
import TabControl from './TabControl.vue'
export default {
    components:{
        TabControl,
    },
    data() {
        return {
            titles:['衣服','鞋子','裤子'],
            contents:["衣服页面","鞋子页面","裤子页面"],
            currentIndex:0
        }
    },
    methods:{
        indexchange(index){
            this.currentIndex = index
        }
    }
}
</script>

<style scoped>
.h2{
    font-weight: normal;
    font-size: xx-large;
}
</style>