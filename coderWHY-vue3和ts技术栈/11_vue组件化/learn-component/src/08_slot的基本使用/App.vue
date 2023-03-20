<template>
    <div>
        <MySlotCpn>
            <button>我是按钮1</button>
            <button>我是按钮2</button>
            <button>我是按钮3</button>
        </MySlotCpn>

        <MySlotCpn>
            <MyButton></MyButton>
        </MySlotCpn>
    </div>
</template>

<script>
import MySlotCpn from './MySlotCpn.vue';
import MyButton from './MyButton.vue'
export default {
    components:{
        MySlotCpn,MyButton
    }
}
</script>

<style scoped></style>