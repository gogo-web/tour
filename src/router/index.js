import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Location from '@/page/location/Location'
import Detail from '@/page/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/location',
      component: Location,
    },
    {
      path:'/detail/:id',
      component: Detail,
    },
  ]
})
