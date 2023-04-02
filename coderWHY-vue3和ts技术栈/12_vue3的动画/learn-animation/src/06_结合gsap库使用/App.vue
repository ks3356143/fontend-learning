<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition type="animation" appear @enter="enter" @leave="leave">
            <h2 class="title" v-if="isShow">Hello World</h2>
        </transition>
    </div>
</template>

<script>
import gsap from 'gsap'
export default {
    data() {
        return {
            isShow: true,
            distance:200
        }
    },
    methods:{
        enter(el,done){
            console.log('进入动画');
            gsap.from(el,{ // 从什么状态开始，到进入结束
                scale:2.2,
                x:this.distance,
                onComplete:done,
            }) 
        },
        leave(el,done){
            console.log('离开动画');
            gsap.to(el,{ // 这个是要达到一个状态
                scale:0,
                y:this.distance,
                onComplete:done
            }) 
        }
    }
}
</script>

<style scoped>
.title{
    width: 200px;
    height: 100px;
}
</style>