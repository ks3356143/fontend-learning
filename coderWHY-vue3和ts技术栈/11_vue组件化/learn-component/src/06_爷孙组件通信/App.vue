<template>
    <div>
        <Home></Home>
        <button @click="addName">+name</button>
    </div>
</template>

<script>
import Home from './Home.vue'
import { computed } from 'vue'
console.log(this);
export default {
    components: { Home },
    provide() {
        return {
            name: 'chen',
            age: 22,
            length: computed(() => {
                return this.names.length
            })
        }
    },
    data() {
        return {
            names: ['a', 'b', 'c']
        }
    },
    methods: {
        addName() {
            this.names.push("d")
            console.log(this.names);
        },
    }
}
</script>

<style scoped></style>