import { createStore } from 'vuex'

export default createStore({
    state: {
        contador: 0
    },
    getters: {},
    mutations: {
        subircontador(state, random) {
            state.contador += random;
        },
        bajarcontador(state, random) {
            state.contador -= random;
        }
    },
    actions: {
        async subircontador({ commit }) {
            const rest = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new')
            const results = await rest.json();
            console.log(results);
            commit("subircontador", results)
        },
        async bajarcontador({ commit }) {
            const rest = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new')
            const results = await rest.json();
            console.log(results);
            commit("bajarcontador", results)
        }
    },
    modules: {}
})