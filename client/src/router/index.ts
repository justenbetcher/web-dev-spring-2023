import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import { useSessoin } from '../model/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
      component: AboutView
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
      beforeEnter:
    }, 
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router

function secureRoute (to, from , next) {
  const session = useSession();
  if (session.user) {
    next() 
  } 
  else { 
    next('/login')
  }
}