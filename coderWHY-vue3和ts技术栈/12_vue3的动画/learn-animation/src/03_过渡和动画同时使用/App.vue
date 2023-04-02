<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition type="animation" :duration="1000">
            <h2 class="title" v-if="isShow">Hello World</h2>
        </transition>
    </div>
</template>

<script>
export default {
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