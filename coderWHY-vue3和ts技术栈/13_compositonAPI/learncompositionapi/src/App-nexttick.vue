<template>
  <div>
    <h2 ref="messageDomRef">{{ message }}</h2>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue'
export default {
  setup() {
    const message = ref('哈哈哈')
    const messageDomRef = ref(null)
    const addMessageContent = () => {
      message.value += "增加的hahaha"
      console.log(messageDomRef.value.offsetHeight); 
      nextTick(() => {
        console.log(messageDomRef.value.offsetHeight);
      })
    }

    return { message, addMessageContent, messageDomRef }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
