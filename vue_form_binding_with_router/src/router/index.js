import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../views/Posts/PostView.vue'
import PostDetail from '../views/Posts/PostDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PostView
    },
    {
      path: '/about',
      name: 'about',
    
      component: () => import('../views/AboutView.vue')
    },
    {
      path:"/:id",
      name:"postDetail",
      component:PostDetail,
      props:true
    }
  ]
})

export default router
