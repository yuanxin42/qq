import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/view/homePage/index').default
    },
    {
      path: '/friends',
      component: require('@/view/friends/index').default
    },
    {
      path: '/talk',
      component: require('@/view/talk/index').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
