import React from 'react';
import { useLocation, useRoutes, useNavigate } from 'react-router-dom';
import router from '@/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { GlobalStyle } from './global-styles';
import { ACCESS_TOKEN } from './interfaces/constants';

function App() {
  let isLoggedIn = window.localStorage.getItem(ACCESS_TOKEN) as string;
  let location = useLocation();
  const navigation = useNavigate();
  const content = useRoutes(router(Boolean(isLoggedIn)));
  React.useEffect(() => {
    window.localStorage.getItem('i18n') === undefined && window.localStorage.setItem('i18n', 'kr');
    if (location.pathname === '/' && !isLoggedIn) {
      navigation('/login');
    }
  }, []);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <GlobalStyle />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
