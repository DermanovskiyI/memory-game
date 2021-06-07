import { createRouter, createWebHashHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Game from '../views/Game.vue';
// import test from '../views/test.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/Game',
    name: 'Game',
    component: Game,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
