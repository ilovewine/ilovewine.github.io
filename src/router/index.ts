import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/AboutView.vue'),
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: () => import('../views/technologies/TechnologiesView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/projects/ProjectsView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact/ContactView.vue'),
    },
  ],
});

export default router;
