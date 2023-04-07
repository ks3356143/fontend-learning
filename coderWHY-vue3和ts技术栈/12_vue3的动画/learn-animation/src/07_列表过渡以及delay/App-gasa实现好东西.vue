<template>
    <div>
        <input type="text" v-model="keyword">
        <transition-group appear tag="ul" name="chen" :css="false" @before-enter="beforeEnter" @enter="enter"
            @leave="leave">
            <li v-for="item, index in showNames" :key="item" :data-index="index">
                {{ item }}
            </li>
        </transition-group>
    </div>
</template>

<script setup>
import gsap from 'gsap'
import { ref, computed } from 'vue'
const names = ref(['cba', '123', 'c12', '1231asd', 'dsf32', 'ks002', 'kobe', 'chen', 'curry'])
const keyword = ref("")
const showNames = computed(() => {
    return names.value.filter(item => item.indexOf(keyword.value) !== -1)
})
const beforeEnter = function (el, done) {
    el.style.opacity = 0
    el.style.height = 0
}
const enter = function (el, done) {
    gsap.to(el, {
        opacity: 1,
        height: "1.5em",
        delay: el.dataset.index * 0.1
    })
}
const leave = function (el, done) {
    gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.1
    })
}
</script>