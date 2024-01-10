import { createRouter, createWebHistory } from 'vue-router';
import ListCountries from '../components/ListCountries.vue';

const router = createRouter({
  history: createWebHistory('/Vue-Countries-Catalog/'),
  routes: [
    {
      path: '/',
      component: ListCountries,
    },
  ],
});

export default router;
