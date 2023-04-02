<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition>
            <h2 v-if="isShow">Hello World</h2>
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
.v-enter-from{
    opacity: 0;
}
.v-enter-active{
    transition: opacity 1s ease-in-out;
}
.v-enter-to{
    opacity: 1;
}
.v-leave-from{
    opacity: 1;
}
.v-leave-active{
    transition: opacity 1s;
}
.v-leave-to{
    opacity: 0;
}
</style>