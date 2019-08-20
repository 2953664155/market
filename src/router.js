import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
// import Index from '@/views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: '/index/user',
          name: 'user',
          component: () => import('./views/Modul/Account/User.vue')
        },
        {
          path: '/index/changePassword',
          name: 'changePassword',
          component: () => import('./views/Modul/Account/ChangePassword.vue')
        }, {
          path: '/index/addUser',
          name: 'addUser',
          component: () => import('./views/Modul/Account/AddUser.vue')
        }, {
          path: '/index/addProduct',
          name: 'addProduct',
          component: () => import('./views/Modul/Product/AddProduct.vue')
        }, {
          path: '/index/product',
          name: 'product',
          component: () => import('./views/Modul/Product/Product.vue')
        }, {
          path: '/index/stock',
          name: 'stock',
          component: () => import('./views/Modul/Stock/Stock.vue')
        }, {
          path: '/index/addStock',
          name: 'addStock',
          component: () => import('./views/Modul/Stock/AddStock.vue')
        }, {
          path: '/index/clear',
          name: 'clear',
          component: () => import('./views/Modul/Clear/Clear.vue')
        }, {
          path: '/index/clearout',
          name: 'clearout',
          component: () => import('./views/Modul/Clear/Clearout.vue')
        }, {
          path: '/index/clearback',
          name: 'clearback',
          component: () => import('./views/Modul/Clear/Clearback.vue')
        }, {
          path: '/index/member',
          name: 'member',
          component: () => import('./views/Modul/Member/Member.vue')
        }, {
          path: '/index/addMember',
          name: 'addMember',
          component: () => import('./views/Modul/Member/AddMember.vue')
        },
        
        
      ]
    }
  ]
})
