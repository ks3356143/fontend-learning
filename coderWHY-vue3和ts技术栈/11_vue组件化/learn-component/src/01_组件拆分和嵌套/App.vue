<template>
    <div id="app">
        <Header></Header> <!-- h5有个标签也叫header,所以尽量大写 -->
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'

export default {
    components:{
        Header, //在es6中对象如果属性名称和属性值名字一样课简写
        Main,
        Footer
    },
    data() {
        return {

        }
    },
}
</script>

<style scoped></style>