import { useRoutes } from 'react-router-dom';
import router from '@/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { GlobalStyle } from './global-styles';

function App() {
  const content = useRoutes(router);

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
