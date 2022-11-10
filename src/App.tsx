import React from 'react';
import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css';
import '@/assets/scss/_style.scss';

const LoginPage = loadable(() => import('@/pages/auth/views/Login'));
const DefaultLayout = loadable(() => import('@/layouts/DefaultLayout'));

export const App: React.FC = () => {
  // const { t } = useTranslation();
  React.useEffect(() => {
    window.localStorage.getItem('i18n') == undefined && window.localStorage.setItem('i18n', 'kr');
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<DefaultLayout />} />
    </Routes>
  );
};
