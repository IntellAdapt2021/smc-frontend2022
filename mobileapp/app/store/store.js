import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      count: 0,
      registeredusers: []
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--,
      setcount: (state, newcount) => state.count = newcount,
      setregisteredusers: (state, newusers) => state.registeredusers = newusers
    }
})


export default store;