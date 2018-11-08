import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      count: 0,
      registeredusers: [],
      buymode: false,
      buyuser: {},
      checkoutmode: false, // true if in checkout page
      cartItems: []
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--,
      setcount: (state, newcount) => state.count = newcount,
      setregisteredusers: (state, newusers) => state.registeredusers = newusers,
      setcheckoutmode: (state, mode) => {
        state.checkoutmode = mode;
      },
      setbuymode: (state, mode) => { 
        state.buymode = mode;
      },
      setbuyuser: (state, user) => state.buyuser = user,
      addcartitem: (state, cartItem) => state.cartItems.push(cartItem),
      removecartitem: (state, cartItem) => {
        let remove = function(array, element) {
          return array.filter(e => e !== element);
        };
        state.cartItems = remove(state.cartItems, cartItem);
      }
    }
})


export default store;