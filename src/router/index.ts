import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'BZ INFINITY' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: 'About - BZ INFINITY' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: { title: 'Contact - BZ INFINITY' }
    },
    {
      path: '/legal/privacy-policy',
      name: 'privacy',
      component: () => import('@/views/legal/PrivacyPolicy.vue'),
      meta: { title: 'Privacy Policy - BZ INFINITY' }
    },
    {
      path: '/legal/terms-and-conditions',
      name: 'terms',
      component: () => import('@/views/legal/TermsConditions.vue'),
      meta: { title: 'Terms & Conditions - BZ INFINITY' }
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || 'BZ INFINITY'
  next()
})

export default router
