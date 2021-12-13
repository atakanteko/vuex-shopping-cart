import Vue from 'vue'
import Vuex from 'vuex'

import { data } from '../data';


Vue.use(Vuex)

export const store = new Vuex.Store({

    state : {
        bookList: data,
        shoppingCart: [],
    },
    getters: {
        getBookList: (state) => state.bookList,
        getShoppingCart: (state) => state.shoppingCart
    },
    actions: {
        addToCart:({commit},payload) => {
            const book = data.find(i => i.id == payload)
            commit('ADD_TO_CART',book)
        },
        deleteFromCart: (context,id) => {
            
            context.commit('DELETE_FROM_CART',id)
        }
    },
    mutations: {
        'ADD_TO_CART': (state,payload) => {
            console.log(payload);
            state.shoppingCart.unshift(payload)
        },
        'DELETE_FROM_CART': (state,id) => {
            console.log('dsf',id);
            state.shoppingCart = state.shoppingCart.filter(m => m.id != id)
        },

    },
    
   
})