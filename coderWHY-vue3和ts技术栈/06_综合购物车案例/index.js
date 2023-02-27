const app = Vue.createApp({
    template: "#my-app",
    data() {
        return {
            books: [
                {
                    id: 1,
                    name: '《算法导论》',
                    date:'2018-6',
                    price: 82.00,
                    count:1
                },
                {
                    id: 1,
                    name: '《邓跃林之爱》',
                    date:'2012-2',
                    price: 23.00,
                    count:1
                },
                {
                    id: 1,
                    name: '《Java基础》',
                    date:'2017-6',
                    price: 56.00,
                    count:1
                },
                {
                    id: 1,
                    name: '《SpringBoot之光》',
                    date:'2021-1',
                    price: 182.00,
                    count:1
                },
                {
                    id: 1,
                    name: '《python图文并茂》',
                    date:'2023-1',
                    price: 19.86,
                    count:1
                },
            ],
        }
    },
    methods: {
        increment(index) {
            // 通过索引值获取对象
            this.books[index].count++
        },
        decrement(index){
            this.books[index].count--
        },
        removeElement(index){
            this.books.splice(index,1)
        },
        formatPrice(price){
            return '¥' + price
        }
    },
    computed:{
        totalPrice(){
            let total = 0
            for(let book of this.books){
                total = total + book.count * book.price
            }
            return total
        }
    }
})
app.mount('#app')