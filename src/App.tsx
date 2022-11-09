import '@/assets/scss/_style.scss';
import 'antd/dist/antd.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const LoginPage = React.lazy(() => import('@/pages/auth/views/Login'));
const DefaultLayout = React.lazy(() => import('@/layouts/DefaultLayout'));

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
