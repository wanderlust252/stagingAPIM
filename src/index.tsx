import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import rootStore from '@/store/index';
// import './i18n';


import { App } from './App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
