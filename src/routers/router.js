import Vue from "vue";
import Router from "vue-router";

// volunteer Views
import VolunteerRoutes from './volunteerRoutes' 

// organization View

import OrganizationRoutes from './organizationRoutes'

// admin View

import AdminRoutes from './adminRoutes'

Vue.use(Router);
export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    ...VolunteerRoutes,

    ...OrganizationRoutes,

    ...AdminRoutes

  ],

  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

