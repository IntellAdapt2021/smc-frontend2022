import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      count: 0,
      registeredusers: [],
      buymode: false,
      buyuser: {}
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--,
      setcount: (state, newcount) => state.count = newcount,
      setregisteredusers: (state, newusers) => state.registeredusers = newusers,
      setbuymode: (state, mode) => state.buymode = mode,
      setbuyuser: (state, user) => state.buyuser = user
    }
})


export default store;