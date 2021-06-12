import { createRouter, createWebHashHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Cards from '../views/Cards.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Cards,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
