import 'nprogress/nprogress.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/ReactToastify.min.css';
import './i18n';

import App from './App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LicenseManager } from 'ag-grid-enterprise';
import { ToastContainer } from 'react-toastify';
import { APP_CONFIG } from '@/utils/env';
import rootStore from './store';
import { SidebarProvider } from '@/contexts/SidebarContext';
import { queryClient } from '@/utils/queryClient';

LicenseManager.setLicenseKey(APP_CONFIG.aggrid_license as string);

ReactDOM.render(
  <Provider store={rootStore}>
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <BrowserRouter>
          <App />
          <ToastContainer />
          <ReactQueryDevtools position="bottom-right" />
        </BrowserRouter>
      </SidebarProvider>
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root'),
);
