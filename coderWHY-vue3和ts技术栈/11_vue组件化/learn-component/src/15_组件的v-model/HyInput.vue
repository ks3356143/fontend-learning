<template>
    <div>
        <input type="text" v-model='value'>
        <input type="text" v-model="chen">
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String | Number,
        title: String,
    },
    emits: ["update:modelValue","update:title"],
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit("update:modelValue", value)
            }
        },
        chen:{
            set(value){
                this.$emit('update:title',value)
            },
            get(){
                return this.title
            }
        }
    }
}
</script>

<style scoped></style>