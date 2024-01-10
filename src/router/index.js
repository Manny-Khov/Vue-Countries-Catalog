import { createRouter, createWebHistory } from 'vue-router';
import ListCountries from '../components/ListCountries.vue';

const routes = [
  {
    path: '/',
    name: 'ListCountries',
    component: ListCountries
  }
  // You can add more routes here as needed
];

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/Vue-Countries-Catalog/' : '/'),
  routes
});

export default router;
