<template>
    <div>
        <h2>HomeContent</h2>
    </div>
</template>

<script>
import emitter from './utils/eventbus';

export default {
    data() {
        return {

        }
    },
    created() {
        emitter.on("*", (type, info) => {
            console.log(type);
            console.log(info);
        })
    },
}
</script>

<style scoped></style>