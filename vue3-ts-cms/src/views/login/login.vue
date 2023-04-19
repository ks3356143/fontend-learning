<template>
    <div class="login">
        <login-pannel></login-pannel>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LoginPannel from "@/views/login/cpns/login-pannel.vue"

export default defineComponent({
    components: { LoginPannel },
    setup() {
        return {}
    }
})
</script>

<style lang="less" scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: url("@/assets/img/login-bg.svg");
}
</style>
