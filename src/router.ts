import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import Crew from './views/Crew.vue';
import Destination from './views/Destination.vue';
import Home from './views/Home.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/destination',
    component: Destination,
  },
  {
    path: '/crew',
    component: Crew,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
