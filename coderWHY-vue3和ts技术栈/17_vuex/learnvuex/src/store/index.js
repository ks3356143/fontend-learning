import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
    state: function () {
        return {
            counter: 100,
            name: '陈俊亦',
            age: 10,
            nickname: '叫叫',
            books: [
                {
                    name: '深入vuejs',
                    price: 200,
                    count: 3
                },
                {
                    name: 'webpack详解',
                    price: 66,
                    count: 5
                },
                {
                    name: 'vite详解',
                    price: 131,
                    count: 1
                },
                {
                    name: 'node详解',
                    price: 43,
                    count: 2
                }
            ],
            banners: []
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementN(state, paylaod) {
            state.counter += paylaod
        },
        addBannerData(state, payload) {
            state.banners = payload
        }
    },
    getters: {
        totalPrice(state, getters) {
            let totalPrice = 0
            for (const book of state.books) {
                totalPrice += book.count * book.price
            }
            return totalPrice * getters.currentDiscount
        },
        currentDiscount(state) {
            return 0.9
        },
        totalPriceCountGreaterN(state, getters) {
            return function (n) {
                let totalPrice = 0
                for (let book of state.books) {
                    if (book.count >= n) {
                        totalPrice += book.count * book.price * getters.currentDiscount
                    }
                }
                return totalPrice
            }
        },
        nameInfo(state) {
            return `name:${state.name}`
        },
        ageInfo(state) {
            return `age:${state.age}`
        },
        countInfo(state) {
            return `counter:${state.counter}`
        }
    },
    actions: {
        // 也是放函数
        incrementAction(context) {
            console.log(payload);
            setTimeout(() => {
                context.commit({
                    type: "increment",
                })
            }, 2000)
        },
        getHomeMultiData(context) {
            axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
                context.commit('addBannerData', res.data.data.banner.list)
            })
        },
        decrement(context) {
            console.log(context);
        }
    }
})

export default store