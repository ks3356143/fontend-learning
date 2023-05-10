<template>
    <div class="chen-form">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <el-form :label-width="labelWidth" class="chen-form">
            <el-row>
                <template v-for="item in formItems" :key="item.label">
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                        <el-form-item
                            :label="item.label"
                            :placeholder="item.placeholder"
                            :rules="item.rules"
                            class="form-item"
                        >
                            <template v-if="item.type === 'input' || item.type === 'password'">
                                <el-input
                                    :placeholder="item.placeholder"
                                    :show-password="item.type === 'password'"
                                    v-bind="item.otherOption"
                                    v-model="formData[`${item.field}`]"
                                ></el-input>
                            </template>
                            <template v-else-if="item.type === 'select'">
                                <el-select
                                    :placeholder="item.placeholder"
                                    style="width: 100%"
                                    v-bind="item.otherOption"
                                    v-model="formData[`${item.field}`]"
                                >
                                    <el-option v-for="option in item.options" :value="option.value" :key="option.value">
                                        {{ option.title }}
                                    </el-option>
                                </el-select>
                            </template>
                            <template v-else-if="item.type === 'datepicker'">
                                <el-date-picker
                                    v-model="formData[`${item.field}`]"
                                    style="width: 100%"
                                    v-bind="item.otherOption"
                                ></el-date-picker>
                            </template>
                        </el-form-item>
                    </el-col>
                </template>
            </el-row>
        </el-form>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue"
import type { IFormItem } from "@/base-ui/form/types"

export default defineComponent({
    emits: ["update:modelValue"],
    props: {
        modelValue: {
            type: Object,
            required: true
        },
        formItems: {
            // 数组和对象需要从vue导出PropType
            type: Array as PropType<IFormItem[]>,
            default: () => []
        },
        labelWidth: {
            type: String,
            default: () => "100px"
        }
    },
    setup(props, { emit }) {
        // 原对象拷贝了一份
        const formData = ref({ ...props.modelValue })
        watch(
            formData,
            (newValue) => {
                emit("update:modelValue", newValue)
            },
            {
                deep: true
            }
        )
        return { formData }
    }
})
</script>

<style scoped lang="less">
.chen-form {
    padding-top: 8px;
    margin-right: 10px;
}
</style>
