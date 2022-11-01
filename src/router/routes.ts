import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/home',
  //   component: () => import('pages/HomePage.vue'),
  // },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // {
      //   path: '',
      //   redirect: '/home',
      // },
      {
        path: 'research',
        component: () => import('pages/ResearchPage.vue'),
      },
      {
        path: 'observe',
        component: () => import('pages/ObservePage.vue'),
      },
      {
        path: 'practice',
        component: () => import('pages/PracticePage.vue'),
      },
      //需修改以下
      {
        path: 'home',
        component: () => import('pages/HomePage.vue'),
      },
      {
        path: 'display',
        component: () => import('pages/DisplayPage.vue'),
      },
    ],
  },
  // {
  //   path: '/display',
  //   component: () => import('pages/DisplayPage.vue'),
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
