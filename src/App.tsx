import '@/assets/scss/_style.scss';
import 'antd/dist/antd.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const LoginPage = React.lazy(() => import('@/pages/auth/views/Login'));
const DefaultLayout = React.lazy(() => import('@/layouts/DefaultLayout'));
// const LoginPage = Loadable({
//   loader: () => import('pages/auth/views/Login'),
//   loading,
// });

// const DefaultLayout = Loadable({
//   loader: () => import('layouts/DefaultLayout'),
//   loading,
// });

export const App: React.FC = () => {
  // const { t } = useTranslation();
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<DefaultLayout />} />
    </Routes>
  );
};
