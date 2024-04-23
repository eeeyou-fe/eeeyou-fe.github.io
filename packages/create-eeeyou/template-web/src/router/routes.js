import LAYOUT from '/@/layouts/index.vue';

const menuRoutes = [
  {
    path: '/',
    name: 'Index',
    component: LAYOUT,
    redirect: '/home',
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页',
        },
        component: () => import('/@/views/home.vue'),
      },
    ],
  },
];

export default menuRoutes;
