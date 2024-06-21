import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/research-area',
      name: 'ResearchArea',
      component: () => import('../views/ResearchArea.vue')
    },
    {
      path: '/members',
      name: 'Members',
      component: () => import('../views/Members.vue')
    },
    {
      path: '/intellectual-property',
      name: 'IntellectualProperty',
      component: () => import('../views/IntellectualProperty.vue')
    },
    {
      path:'/social-media',
      name:'SocialMedia',
      component: () => import('../views/SocialMedia.vue')
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactUs.vue')
    }
  ]
})

export async function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  // 路由准备就绪后挂载APP实例
  await router.isReady()
}

export default router
