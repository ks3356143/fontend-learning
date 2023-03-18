<template>
    <div class="tab-control">
        <div class="tab-control-item" @click="titleClick(index)" :class="{active:currentIndex===index}" v-for="(title, index) in titles" :key="title">
            <span>{{ title }}</span>
        </div>
    </div>
</template>

<script>
export default {
    emits:{
        changeTab:(index,titles)=>{
            if(index > titles.length){
                
                return false
            }
            console.log(titles);
            return true
        }
    },
    props: {
        titles: {
            type: Array,
            default: ['衣服', '鞋子', '裤子']
        }
    },
    data() {
        return {
            currentIndex:0, //默认选中0
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex = index
            this.$emit("changeTab",index,this.titles)
        }
    }
}
</script>

<style scoped>
.tab-control{
    display: flex;
}
.tab-control-item{
    flex:1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    height: 44px;
}
.tab-control-item:hover{
    background-color: aquamarine;
}

.tab-control-item.active{
    background-color: aquamarine;
}

.tab-control-item.active span{
    border-bottom: 5px solid red;
    padding: 5px 10px;
}
</style>