import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Products from './components/Products'
import Cart from './components/Cart'

const routes = [
    {
        path: '/home',
        component: Products,
        name: 'home'
    },
    {
        path: '/cart',
        component: Cart,
        name:'cart'
    }
]

export const router = new VueRouter({
    mode:'history',
    routes: routes,
  
})

