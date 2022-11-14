import React from 'react';
import { useRoutes } from 'react-router-dom';
import router from '@/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { GlobalStyle } from './global-styles';

function App() {
  const content = useRoutes(router);
  React.useEffect(() => {
    window.localStorage.getItem('i18n') === undefined && window.localStorage.setItem('i18n', 'kr');
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
