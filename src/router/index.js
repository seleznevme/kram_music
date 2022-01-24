import { createRouter, createWebHistory } from 'vue-router'
import KmNews from '@/views/news/News.vue'
import AddNews from '@/views/AddNews.vue'
import Registration from '@/views/Registration.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'KmNewse',
    component: KmNews
  },
  {
    path: '/AddNews',
    name: 'AddNews',
    component: AddNews
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
