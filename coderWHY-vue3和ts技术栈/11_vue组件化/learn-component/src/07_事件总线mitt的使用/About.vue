<template>
    <div>
        <button @click="btnClick">About的按钮</button>
    </div>
</template>

<script>
import emitter from './utils/eventbus';
export default {
    methods: {
        btnClick() {
            console.log('About组件发生了点击');
            emitter.emit("chen", { name: 'chenjunyi', age: 18 })
            emitter.emit("kobe", { name: 'dengyuelin', age: 18 })
        }
    }
}
</script>

<style scoped></style>