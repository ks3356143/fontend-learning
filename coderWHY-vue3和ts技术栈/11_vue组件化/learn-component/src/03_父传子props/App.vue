<template>
    <div>
        <ShowMessage title="哈哈哈1" content="我是hahah-one"></ShowMessage>
        <ShowMessage title="哈哈哈2" content="我是hahah-two"></ShowMessage>
        <ShowMessage title="哈哈哈3" content="我是hahah-three"></ShowMessage>
        <ShowMessage :title="title" :content="content"></ShowMessage>
        <ShowMessage :="message"></ShowMessage>
    </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue';
export default {
    data() {
        return {
            title:"嘻嘻嘻",
            content:"我是嘻嘻嘻s",
            message:{
                title:'黑',
                content:'我是黑'
            }
        };
    },
    components: { ShowMessage }
}
</script>

<style scoped></style>