import { createRouter, createWebHistory } from 'vue-router'
import KmNews from '@/views/news/News.vue'
import AddNews from '@/views/AddNews.vue'
import Registration from '@/views/Registration.vue'
import About from '@/views/About.vue'
import PostPage from '@/views/news/PostPage.vue'
import DeletePost from '@/views/CompletedAction/DeletePostCompleted.vue'

const routes = [
  {
    path: '/',
    name: 'KmNews',
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
  {
    path: '/PostPage/:id',
    name: 'PostPage',
    component: PostPage,
  },
  {
    path: '/DeletePost',
    name: 'DeletePost',
    component: DeletePost,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
