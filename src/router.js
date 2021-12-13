import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Products from './components/Products'
import Cart from './components/Cart'

const routes = [
    {
        path: '/',
        component: Products
    },
    {
        path: '/cart',
        component: Cart
    }
]

export const router = new VueRouter({
    mode:'history',
    routes: routes,
  
})

