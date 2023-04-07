<template>
    <div>
        <button @click="addNum">随机添加数字</button>
        <button @click="removeNum">随机删除数字</button>
        <button @click="shuffleNum">随机排序数字</button>
        <hr>
        <transition-group name="chen" appear>
            <span class="item" v-for="item, index in numbers" :key="item">{{ item }}</span>
        </transition-group>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import _ from 'lodash'
const numbers = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
let counter = ref(10)
// 先定义一个随机获取index
const randomIndex = function () {
    return Math.floor(Math.random() * 10)
}
const addNum = function () {
    numbers.value.splice(randomIndex(), 0, counter.value++)
}
const removeNum = function () {
    numbers.value.splice(randomIndex(), 1)
}
const shuffleNum = function () {
    numbers.value = _.shuffle(numbers.value)
}

</script>

<style scoped>
.item {
    display: inline-block;
    font-size: 25px;
    margin: 5px 10px;
}

.chen-enter-from,
.chen-leave-to {
    opacity: 0;
    transform: translateY(50px);
}

.chen-enter-active {
    transition: all 1s ease;
}
.chen-leave-active{
    transition: all 1s ease;
    position: absolute;
}

.chen-move{
    transition: all 1s ease;
}
</style>