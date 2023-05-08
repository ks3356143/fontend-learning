<template>
    <div class="user">
        <div class="search">
            <chenForm :form-items="formItems"></chenForm>
        </div>
        <div class="content">321</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import chenForm, { IFormItem } from "@/base-ui/form"

export default defineComponent({
    name: "user",
    components: { chenForm },
    setup() {
        const formItems: IFormItem[] = [
            {
                type: "input",
                label: "用户名",
                placeholder: "请输入用户名"
            },
            {
                type: "password",
                label: "密码",
                placeholder: "请输入密码"
            },
            {
                type: "select",
                label: "喜欢的运动",
                placeholder: "请选择喜欢的运动",
                options: [
                    { title: "篮球", value: "basketball" },
                    { title: "足球", value: "football" }
                ]
            },
            {
                type: "datepicker",
                label: "创建时间",
                otherOption: {
                    startPlaceholder: "开始时间",
                    endPlaceholder: "结束时间",
                    type: "daterange"
                }
            }
        ]
        return { formItems }
    }
})
</script>

<style scoped></style>
