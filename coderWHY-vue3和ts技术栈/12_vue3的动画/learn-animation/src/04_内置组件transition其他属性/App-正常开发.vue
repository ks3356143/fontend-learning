<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition type="animation" :duration="2000" mode="in-out" appear>
            <component class="title" :is="isShow ? 'home':'about'"></component>
        </transition>
    </div>
</template>

<script>
import Home from './pages/Home.vue';
import About from './pages/About.vue';
export default {
    components:{Home,About},
    data() {
        return {
            isShow: true
        }
    },
}
</script>

<style scoped>
.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-to,.v-leave-from{
    opacity: 1;
}

.v-enter-active {
    animation: bounce 2s ease;
    transition: opacity 1s ease;
}

.v-leave-active {
    animation: bounce 2s ease reverse;
    transition: opacity 1s ease;
}

@keyframes bounce {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.4);
    }

    100% {
        transform: scale(1);
    }
}

.title {
    width: 200px;
    height: 100px;
    margin-left: 100px
}
</style>