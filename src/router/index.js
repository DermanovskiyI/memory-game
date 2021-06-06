import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home.vue';
import Game from '../views/Game.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
