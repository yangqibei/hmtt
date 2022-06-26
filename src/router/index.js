import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/home',
        name: '首页',
        component: () => import('@/views/Home')
      },
      {
        path: '/video',
        name: '视频',
        component: () => import('@/views/video')
      },
      {
        path: '/question',
        name: '问答',
        component: () => import('@/views/question')
      },
      {
        path: '/my',
        name: '我的',
        component: () => import('@/views/my')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
