import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home';
import Post from '@/views/Post';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
