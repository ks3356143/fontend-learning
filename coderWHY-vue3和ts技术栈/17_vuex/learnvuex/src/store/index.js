import { createStore } from 'vuex'
// 导入其他store的module
import userModule from './modules/user.js'
import homeModule from './modules/home.js'
const store = createStore({
    state() {
        return {
            rootCounter: 0
        }
    },
    mutations: {
        increment(state) {
            state.rootCounter++
        },
        decrement(state) {
            state.rootCounter--
        }
    },
    modules: {
        home: homeModule,
        user: userModule
    }
})

export default store