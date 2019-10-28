import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Reg from './views/reg.vue'
import Index from './views/index.vue'
import car from './views/carousel copy.vue'
import order from './views/order'
import search from './views/search'
import mycart from './views/mycart'
import shirts from './views/shirts'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index",component:Index},
    {path:"/car",component:car},
    {path:"/reg",component:Reg},
    {path:"/login",component:Login},
    {path:"/order",component:order},
    {path:"/search",component:search},
    {path:"/mycart",component:mycart},
    {path:"/shirts",component:shirts},
  ]
})
