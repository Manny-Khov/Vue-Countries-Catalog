import { createRouter, createWebHistory } from 'vue-router';
import ListCountries from './components/ListCountries.vue';

const routes = [
  {
    path: '/',
    name: 'List Country Catalog',
    component: ListCountries
  },
];


const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/Vue-Countries-Catalog/' : '/'),
  routes
});

export default router;
