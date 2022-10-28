const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'One',
        component: () => import('pages/OnePage.vue'),
      },
      {
        path: 'Two',
        component: () => import('pages/TwoPage.vue'),
      },
      {
        path: 'Three',
        component: () => import('pages/ThreePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
