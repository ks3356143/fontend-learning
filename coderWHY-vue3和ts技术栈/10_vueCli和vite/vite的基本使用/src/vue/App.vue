<template>
    <div>
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                message:"hello App"
            }
        },
    }
</script>

<style>
    h2{
        color: red;
    }
</style>