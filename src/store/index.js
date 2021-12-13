import Vue from 'vue'
import Vuex from 'vuex'

import { data } from '../data';


Vue.use(Vuex)

export const store = new Vuex.Store({

    state : {
        bookList: data
    },
    getters: {
        getBookList: (state) => state.bookList
    },
    mutations: {

    },
    actions: {
        
    },
   
})