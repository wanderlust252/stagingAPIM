import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

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

// Api

// transactions
const Transactions = Loader(lazy(() => import('@/pages/Transactions')));

// Status

const Status404 = Loader(lazy(() => import('@/pages/Status/Status404')));
const Status500 = Loader(lazy(() => import('@/pages/Status/Status500')));
const StatusComingSoon = Loader(lazy(() => import('@/pages/Status/ComingSoon')));
const StatusMaintenance = Loader(lazy(() => import('@/pages/Status/Maintenance')));
const Login = Loader(lazy(() => import('@/pages/auth/views/Login')))

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="management/transactions" replace />,
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />,
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
    ],
  },

  {
    path: '/management',
    element: <SidebarLayout />,
    children: [
      {
        path: 'transactions',
        element: <Transactions />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login/>
  },
];

export default routes;
