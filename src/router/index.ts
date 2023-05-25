import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';
import ApplyView from '../views/ApplyView.vue';
import VerifyEmailView from '../views/VerifyEmailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/apply',
      name: 'apply',
      component: ApplyView
    },
    {
      path: '/verify',
      name: 'verify',
      component: VerifyEmailView
    }
  ]
})

export default router
