import React from 'react';

const Dashboard = React.lazy(() => import('@/pages/dashboard/views/Dashboard'));
const Posts = React.lazy(() => import('@/pages/posts/views/Posts'));

const routes = [
  { path: '/', name: '대시보드', component: Dashboard },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
  },
  {
    path: '/posts/add',
    name: 'add posts',
    component: Posts,
  },
];

export default routes;
