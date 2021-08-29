import Vue from 'vue'
import VueRouter from 'vue-router'
// Vue.use(VueRouter)

import { createRouter,createWebHistory } from 'vue-router'

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:() => import('views/home/home')
  },
  {
    path:'/category',
    component:() => import('views/category/Category')
  },
  {
    path:'/cart',
    component:() => import('views/cart/Cart')
  },
  {
    path:'/profile',
    component:() => import('views/profile/Profile')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
