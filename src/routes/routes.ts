import React from 'react';

const Dashboard = React.lazy(() => import('@/pages/dashboard/views/Dashboard'));
const Setting = React.lazy(() => import('@/pages/setting/views/index'));
const Agents = React.lazy(() => import('@/pages/agents/views/Agents'));
// const Login = React.lazy(() => import('@/pages/auth/views/Login'));

const routes = [
  { path: '/', name: '대시보드', component: Dashboard },
  { path: '/dashboard', name: '대시보드', component: Dashboard },
  { path: '/setting', name: '', component: Setting },
  // { path: '/transactions', name: '대시보드', component: Dashboard },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: Login,
  // },
  {
    path: '/agents/*',
    name: 'agents',
    component: Agents,
  },
];

export default routes;
