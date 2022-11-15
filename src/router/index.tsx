import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SidebarLayout from '@/layouts/SidebarLayout';
import BaseLayout from '@/layouts/BaseLayout';

import SuspenseLoader from '@/components/SuspenseLoader';
import { TODO } from '@/interfaces';

const Loader = (Component: TODO) => (props: TODO) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// dashboard
const Dashboard = Loader(lazy(() => import('@/pages/dashboard/views/Dashboard')));

// agents tree view
const AgentsTreeView = Loader(lazy(() => import('@/pages/agents/views/AgentsTreeView')));
// Api
const Setting = Loader(lazy(() => import('@/pages/setting/views')));
// transactions
const Transactions = Loader(lazy(() => import('@/pages/Transactions')));

// Status

const Status404 = Loader(lazy(() => import('@/pages/Status/Status404')));
const Status500 = Loader(lazy(() => import('@/pages/Status/Status500')));
const StatusComingSoon = Loader(lazy(() => import('@/pages/Status/ComingSoon')));
const StatusMaintenance = Loader(lazy(() => import('@/pages/Status/Maintenance')));
const Login = Loader(lazy(() => import('@/pages/auth/views/Login')));
const AgentManagementPage = Loader(lazy(() => import('@/pages/agents/views/agentList/Agent-List')));
const AgentPointTransaction = Loader(
  lazy(() => import('@/pages/agents/views/agentPointTransaction/AgentPointTransaction')),
);
const AgentCash = Loader(lazy(() => import('@/pages/agents/views/agentCash/AgentCash')));

const routes = (isLoggedIn: boolean) => [
  {
    path: '/',
    element: !isLoggedIn ? <BaseLayout /> : <Navigate to="/dashboard" />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />,
          },
          {
            path: '404',
            element: <Status404 />,
          },
          {
            path: '500',
            element: <Status500 />,
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />,
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />,
          },
        ],
      },
      {
        path: '*',
        element: <Status404 />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/',
    element: isLoggedIn ? <SidebarLayout /> : <Navigate to="/login" />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'agents',
        children: [
          {
            path: 'list',
            element: <AgentManagementPage />,
          },
          {
            path: 'tree-view',
            element: <AgentsTreeView />,
          },
          {
            path: 'point-transactions',
            element: <AgentPointTransaction />,
          },
          {
            path: 'cash-transactions',
            element: <AgentCash />,
          },
        ],
      },
    ],
  },
  {
    path: '/setting',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Setting />,
      },
    ],
  },
];

export default routes;
