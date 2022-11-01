import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Addmin routes
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
    }, //End of admin routes

    // //Landing page || Visitors Homepage
    // {
    //   path: '/',
    //   name: 'Landing page',
    //   component: () => import('../components/Landingpage.vue'),
    // }, 

    //Members routes
    {
      path: '/member',
      name: 'member',
      component: () => import('../components/members/MemberTemplate.vue'),
      
      children: [
        {
          path: '/MemberProfile',
          name: 'Members Profile',
          component: () => import('../components/members/MemberProfile.vue'),
        },
        {
          path: '/MemberEvents',
          name: 'Members events',
          component: () => import('../components/members/MemberEvents.vue'),
        },
        {
          path: '/MemberActivities',
          name: 'activities',
          component: () => import('../components/members/MemberActivities.vue'),
        },
        {
          path: '/AboutUs',
          name: 'About us page',
          component: () => import('../components/AboutUs.vue'),
        },
        {
          path: '/Materials',
          name: 'Materials',
          component: () => import('../components/Materials.vue'),
        },
        {
          path: '/MemberSponsorships',
          name: 'Members sponsorships',
          component: () => import('../components/members/MemberSponsorships.vue'),
        },
        {
          path: '/MemberMessages',
          name: 'Messages',
          component: () => import('../components/members/MemberMessages.vue'),
        },
      ],
    }, //End of member routes 

    //Visitors routes
    {
      path: '/',
      name: 'Landing page',
      component: () => import('../components/Landingpage.vue'),
      
      children: [
        {
          path: '/Testimonials',
          name: 'Testimonials',
          component: () => import('../components/visitor/Testimonials.vue'),
        },
        {
          path: '/Prayers',
          name: 'Prayers',
          component: () => import('../components/visitor/Prayers.vue'),
        },
        {
          path: '/BePartOfUs',
          name: 'Be part of us',
          component: () => import('../components/visitor/BePartOfUs.vue'),
        },
        {
          path: '/AboutUs',
          name: 'About us page',
          component: () => import('../components/AboutUs.vue'),
        },
        {
          path: '/Materials',
          name: 'Materials',
          component: () => import('../components/Materials.vue'),
        },
        // {
        //   path: '/Login',
        //   name: 'Login',
        //   component: () => import('../components/visitor/Login.vue'),
        // },
      ],
    }, //End of Visitor routes
  ],
  // linkActiveClass: 'my-active-link',
  // linkExactActiveClass: 'my-exact-active-link',
})

export default router
