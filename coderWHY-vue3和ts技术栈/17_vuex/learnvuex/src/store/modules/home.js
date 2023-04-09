const homeModule = {
    namespaced: true,
    state: () => {
        return {
            homeCounter: 101
        }
    },
    mutations: {
        increment(state) {
            state.homeCounter++
        }
    },
    getters: {
        doubleHomeCounter(state, getters) {
            return state.homeCounter * 2
        }
    },
    actions: {
        incrementAction(context){
            context.commit("increment")
        }
    }
}

export default homeModule