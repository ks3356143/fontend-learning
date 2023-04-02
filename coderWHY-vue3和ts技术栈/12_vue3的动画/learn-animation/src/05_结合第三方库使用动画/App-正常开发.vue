<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition type="animation" appear enter-active-class="animate__backInDown animate__animated"
                                            leave-active-class="animate__backOutDown animate__animated">
            <component class="title" :is="isShow ? 'home' : 'about'"></component>
        </transition>
    </div>
</template>

<script>
import Home from './pages/Home.vue';
import About from './pages/About.vue';
export default {
    components: { Home, About },
    data() {
        return {
            isShow: true
        }
    },
}
</script>

<style scoped>
.animate__backInDown{
    animation-direction: reverse;
}
</style>