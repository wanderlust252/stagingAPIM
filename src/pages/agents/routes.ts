import React from 'react';

const Agenstree = React.lazy(() => import('./components/AgentsTree'));
const List = React.lazy(() => import('./components/List'));
const CashTransactions = React.lazy(() => import('./components/CashTransactions'));
const PointTransactions = React.lazy(() => import('./components/PointTransactions'));

const routes = [
  {
    path: 'list',
    name: 'agents list',
    element: List,
  },
  {
    path: 'cash-transactions',
    name: 'cash transactions',
    element: CashTransactions,
  },
  {
    path: 'point-transactions',
    name: 'point transactions',
    element: PointTransactions,
  },
  { path: '*', name: 'agent tree', element: Agenstree },
];

export default routes;
