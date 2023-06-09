import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Foods from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import PesananSukses from '../views/Pesanan-sukses.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/foods',
        name: 'foods',
        component: Foods
    },
    {
        path: '/keranjang',
        name: 'keranjang',
        component: Keranjang
    },
    {
        path: '/pesanan-sukses',
        name: 'PesananSukses',
        component: PesananSukses
    },
    {
        path: '/foods/:id',
        name: 'FoodDetail',
        component: FoodDetail
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router