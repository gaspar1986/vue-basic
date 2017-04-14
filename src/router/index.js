import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import detail from '@/pages/detail'
import analysis from '@/pages/detail/analysis'
import forecast from '@/pages/detail/forecast'
import count from '@/pages/detail/count'
import publish from '@/pages/detail/publish'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
      {
        path: '/',
        component: index
      },
      {
        path: '/detail',
        component: detail,
        children:[
          {
            path: 'analysis',
            component: analysis
          },
          {
            path: 'forecast',
            component: forecast
          },
          {
            path: 'count',
            component: count
          }, {
            path: 'publish',
            component: publish
          }
        ]
      }
    ]
})
