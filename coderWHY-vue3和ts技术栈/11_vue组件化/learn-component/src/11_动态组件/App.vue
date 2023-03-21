<template>
    <div>
        <button @click="itemClick(item)" v-for="item in tabs" :key="item" :class="{ active: currentTab == item }">
            {{ item }}
        </button>
        <!-- 1.动态组件 -->
        <keep-alive max="2">
            <component :is='currentTab' name="chen" :age="30" @homeClick="currentClick"></component>
        </keep-alive>
        <!-- 2.v-if实现 -->
        <!-- 
        <template v-if="currentTab === 'home'">
            <Home></Home>
        </template>
        <template v-else-if="currentTab === 'category'">
            <Category></Category>
        </template>
        <template v-else="currentTab === 'about'">
            <About></About>
        </template> 
    -->
    </div>
</template>

<script>
import Home from './pages/Home.vue'
import Category from './pages/Category.vue'
import About from './pages/About.vue'
export default {
    components:{Home,About,Category},
    data() {
        return {
            tabs: ['home', 'about', 'category'],
            currentTab: 'home'
        }
    },
    methods: {
        itemClick(item) {
            this.currentTab = item
        },
        currentClick(){
            console.log('点击了home组件');
        },
    }
}
</script>

<style scoped>
.active {
    color: red
}
</style>