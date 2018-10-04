import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--,
      setcount: (state, newcount) => state.count = newcount
    }
})


export default store;