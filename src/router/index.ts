import { createRouter, createWebHistory } from 'vue-router'

import { useUserStore } from "../stores/userData";

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';
import ApplyView from '../views/ApplyView.vue';
import VerifyEmailView from '../views/VerifyEmailView.vue';
import DashboardView from '../views/dashboard/DashboardView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {requiresNoAuth: true}
    },
    {
      path: '/apply',
      name: 'apply',
      component: ApplyView,
      meta: {requiresNoAuth: true}
    },
    {
      path: '/verify',
      name: 'verify',
      component: VerifyEmailView,
      meta: {requiresNoAuth: true}
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach(async(to, from, next) => {
  const user = useUserStore();

  if (!user.loggedIn) {
    await user.checkSession();
  }

  if (to.matched.some((route) => route.meta.requiresAuth)) {
    
    if (user.loggedIn) {
      next();
    
    } else {
      next({ name: 'login' });
    }

  } else if (to.matched.some((route) => route.meta.requiresNoAuth)) {

    if (!user.loggedIn) {
      next();
    
    } else {
      next({ name: 'dashboard' });
    }

  } else {
    next();
  }

});

export default router
