import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import LoginPage from '@/components/LoginPage'
import SignUpPage from '@/components/SignUpPage'
import CalendarPage from '@/components/CalendarPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/signUp',
      name: 'SignUpPage',
      component: SignUpPage
    },
    {
      path: '/Calendar',
      name: 'CalendarPage',
      component: CalendarPage
    },
  ]
})
