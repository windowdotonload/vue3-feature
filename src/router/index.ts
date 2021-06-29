/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Column from '@/views/columnDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: "/login",
    name: 'login',
    component: Login,
  },
  {
    path: "/column",
    props: true,
    name: 'column',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
