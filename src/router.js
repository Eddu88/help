import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import i18n from './i18n'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: '/:lang',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: 'Empresa',
          name: 'Empresa',
          // route level code-splitting
          // this generates a separate chunk (Empresa.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "Empresa" */ './views/Empresa.vue')
        },
        {
          path: 'Sectores',
          name: 'Sectores',
          component: () => import(/* webpackChunkName: "Sectores" */ './views/Sectores.vue')
        }
      ]
    }
  ]
})
