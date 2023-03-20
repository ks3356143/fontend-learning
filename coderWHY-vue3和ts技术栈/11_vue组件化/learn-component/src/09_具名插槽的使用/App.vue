<template>
    <div>
        <NavBar :name="name">
            <template #left>
                <button>左边按钮</button>
            </template>
            <template #center><h2>我是标题</h2></template>
            <template #default><i>右边的I元素</i></template>
            <template #[name]>我插入</template>
        </NavBar>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
    data() {
        return {
            name:'chen'
        }
    },
    components:{
        NavBar
    }
}
</script>

<style scoped>
body{
    padding: 0;
}
.nav-bar{
    display: flex;
}
.left,.right{
    width: 80px;
    background-color: red;
}
.center{
    flex:1;
    background-color: blue;
}

.left,.right.center{
    height: 80px;
}
</style>