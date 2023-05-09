<template>
    <div class="user">
        <div class="search">
            <chenForm :form-items="searchFormConfig" :labelWidth="labelWidth"></chenForm>
        </div>
        <div class="content"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import chenForm from "@/base-ui/form"
import { searchFormConfig } from "@/views/main/system/user/config/searchConfig"

export default defineComponent({
    name: "user",
    components: { chenForm },
    setup() {
        //外面决定里面form的label宽度
        const labelWidth = "100px"
        return { searchFormConfig, labelWidth }
    }
})
</script>

<style scoped></style>
