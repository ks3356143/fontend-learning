<template>
    <div>
        <button @click="jumpToHome">首页</button>
        <router-link to="/home" exact-active-class="red" #="slotProps" custom>
            <button @click="slotProps.navigate">{{ slotProps.href }}</button>
        </router-link>
        <router-link to="/category">
            <button>点击跳转分类</button>
        </router-link>
        <router-link to="/about">关于</router-link>
        <router-link :to="userpath">用户</router-link>
        <hr>
        <router-view #="slotProps">
            <transition appear name="chen">
                <component :is="slotProps.Component"></component>
            </transition>
        </router-view>
        <hr>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import NavBar from '../components/NavBar.vue';
const username = 'chen'
const id = '123'
const userpath = '/user' + '/' + username + '/-' + id

const $router = useRouter()
const jumpToHome = () => {
    $router.push({
        path: '/home',
        query: {
            name: "chen",
            age: 18
        }
    })
}
</script>

<style scoped>
.red {
    color: red;
}

.chen-enter-from,
.chen-leave-to {
    opacity: 0;
}

.chen-enter-active,
.chen-leave-active{
    transition: opacity 1s ease;
}
</style>