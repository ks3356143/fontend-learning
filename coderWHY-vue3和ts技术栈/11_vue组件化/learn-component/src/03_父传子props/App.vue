<template>
    <div>
        <ShowMessage class='123' class2="321" title="哈哈哈1" content="我是hahah-one"></ShowMessage>
        <MultRootElement id="aaa"></MultRootElement>
    </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue';
import MultRootElement from './MultRootElement.vue';
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
    components: { ShowMessage,MultRootElement }
}
</script>

<style scoped></style>