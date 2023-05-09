<template>
    <div class="chen-form">
        <el-form :label-width="labelWidth" class="chen-form">
            <el-row>
                <template v-for="item in formItems" :key="item.label">
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="1">
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
                                ></el-input>
                            </template>
                            <template v-else-if="item.type === 'select'">
                                <el-select
                                    :placeholder="item.placeholder"
                                    style="width: 100%"
                                    v-bind="item.otherOption"
                                >
                                    <el-option v-for="option in item.options" :value="option.value" :key="option.value">
                                        {{ option.title }}
                                    </el-option>
                                </el-select>
                            </template>
                            <template v-else-if="item.type === 'datepicker'">
                                <el-date-picker style="width: 100%" v-bind="item.otherOption"></el-date-picker>
                            </template>
                        </el-form-item>
                    </el-col>
                </template>
            </el-row>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import type { IFormItem } from "@/base-ui/form/types"

export default defineComponent({
    props: {
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
    setup() {
        return {}
    }
})
</script>

<style scoped lang="less">
.chen-form {
    padding-top: 8px;
    margin-right: 10px;
}
</style>
