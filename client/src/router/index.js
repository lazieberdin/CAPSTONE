import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'home',
      component: () => import('../components/admin/AdminTemplate.vue'),
      // redirect: '/admin',
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: () => import('../components/admin/Dashboard.vue'),
        },
        {
          path: 'events',
          name: 'events',
          component: () => import('../components/admin/Events.vue'),
        },
        {
          path: 'activities',
          name: 'activities',
          component: () => import('../components/admin/Activities.vue'),
        },
        {
          path: 'fndsInfo',
          name: 'foundationsInfo',
          component: () => import('../components/admin/FndsInfo.vue'),
        },
        {
          path: 'materials',
          name: 'materials',
          component: () => import('../components/admin/Materials.vue'),
        },
        {
          path: 'sponsorships',
          name: 'sponsorships',
          component: () => import('../components/admin/Sponsorships.vue'),
        },
        {
          path: 'members',
          name: 'members',
          component: () => import('../components/admin/Members.vue'),
        },
      ],
    },
    {
      path: '/',
      name: 'Home page',
      component: () => import('../components/visitor/VisitorsTemplate.vue'),
    },
  ],
  // linkActiveClass: 'my-active-link',
  // linkExactActiveClass: 'my-exact-active-link',
})

export default router
