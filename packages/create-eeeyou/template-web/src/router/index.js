import menuRoutes from './routes';

export default [
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: () => import('/@/views/404.vue'),
    meta: {
      title: '404',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/login.vue'),
    meta: {
      title: '登录',
    },
  },
  ...menuRoutes,
];
