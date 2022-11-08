import routes from '@/routes/routes';
import { Layout, Spin } from 'antd';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Header = React.lazy(() => import('./Header'));
const Sidebar = React.lazy(() => import('./Sidebar'));

const { Content } = Layout;

const loading = () => <Spin />;

const DefaultLayout = () => {
  return (
    <Layout className="site-layout" style={{ minHeight: '100vh' }}>
      <Suspense fallback={loading()}>
        <Sidebar />
      </Suspense>
      <Layout className="main-layout">
        <Suspense fallback={loading()}>
          <Header />
        </Suspense>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial', padding: '10px' }}>
          <div className="bg-main position-rel">
            <Suspense fallback={loading()}>
              <Routes>
                {routes.map((route, idx) => {
                  if (route.component) {
                    return <Route key={idx} path={route.path} element={<route.component />} />;
                  }
                  return null;
                })}
              </Routes>
            </Suspense>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
