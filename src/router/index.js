import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries.vue'
import LogTime from '@/components/LogTime.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/time-entries',
      name: 'TimeEntries',
      component: TimeEntries,
      children: [{
        path: 'log-time',
        component: LogTime
      }]

    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
