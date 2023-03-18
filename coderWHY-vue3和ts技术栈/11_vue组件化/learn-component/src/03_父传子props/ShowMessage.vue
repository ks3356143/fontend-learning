<template>
    <div>
        <h2 :="$attrs">{{ title }}</h2>
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
    // props:['title','content']
    // inheritAttrs:false,
    props:{
        title:{
            type:String,
            required:true,
            default:123
        },
        content:String,
        info:{
            type:Object,
            default:function(){
                return {
                    message:123
                }
            }
        },
        info2:{
            validation(value){
                return ['123','456','789'].includes(value)
            }
        }
    }
}
</script>

<style scoped></style>