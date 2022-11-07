import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //--------------------------------Visitor routes---------------------------------
    {
      path: '/',
      name: 'Template',
      component: () => import('../components/visitor/VisitorsTemplate.vue'),
      //   component: () => import('../components/visitor/VisitorsTemplate.vue'),

      children: [
        {
          path: '/',
          name: 'Home page',
          component: () => import('../components/visitor/Homepage.vue'),
        },
        {
          path: 'testimonials',
          name: 'Testimonials',
          component: () => import('../components/visitor/Testimonials.vue'),
        },
        {
          path: 'prayers',
          name: 'Prayers',
          component: () => import('../components/visitor/Prayers.vue'),
        },
        {
          path: 'bePartOfUs',
          name: 'Be part of us',
          component: () => import('../components/visitor/BePartOfUs.vue'),
        },
        {
          path: 'aboutUs',
          name: 'About us page',
          component: () => import('../components/AboutUs.vue'),
        },
        {
          path: 'materials',
          name: 'V Materials',
          component: () => import('../components/visitor/Materials.vue'),
        },
        // {
        //   path: '/Login',
        //   name: 'Login',
        //   component: () => import('../components/visitor/Login.vue'),
        // },
      ],
    }, //End of Visitor routes

    //--------------------------------Members routes---------------------------------
    {
      path: '/member',
      name: 'member',
      component: () => import('../components/members/MemberTemplate.vue'),

      children: [
        {
          path: '/member',
          name: 'Profile',
          component: () => import('../components/members/Profile.vue'),
        },
        {
          path: 'events',
          name: 'Events',
          component: () => import('../components/members/Events.vue'),
        },
        {
          path: 'activities',
          name: 'Activities',
          component: () => import('../components/members/Activities.vue'),
        },
        {
          path: 'aboutUs',
          name: 'AboutUs',
          component: () => import('../components/AboutUs.vue'),
        },
        {
          path: 'materials',
          name: 'Materials',
          component: () => import('../components/members/Materials.vue'),
        },
        {
          path: 'sponsorships',
          name: 'Sponsorships',
          component: () => import('../components/members/Sponsorships.vue'),
        },
        {
          path: 'messages',
          name: 'messages',
          component: () => import('../components/members/Messages.vue'),
        },
      ],
    }, //End of member routes

    //--------------------------------Admin routes---------------------------------
    {
      path: '/admin',
      name: 'home',
      component: () => import('../components/admin/AdminTemplate.vue'),
      // redirect: '/admin',
      children: [
        {
          path: '/admin',
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
          component: () => import('../components/admin/AdminMaterials.vue'),
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
    }, //End of admin routes
    //Error 404
    {
      path: '/:catchAll(.*)*',
      component: () => import('../components/ErrorNotFound.vue'),
    },
  ],
  // linkActiveClass: 'my-active-link',
  // linkExactActiveClass: 'my-exact-active-link',
})

export default router
