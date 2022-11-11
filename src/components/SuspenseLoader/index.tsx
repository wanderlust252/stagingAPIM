import { useEffect } from 'react';
import NProgress from 'nprogress';
import { CircularProgress } from '@mui/material';
import { Loading } from './style';

function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Loading
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
      display="flex"
      alignItems="center"
      justifyContent="center">
      <CircularProgress size={64} disableShrink thickness={3} />
    </Loading>
  );
}

export default SuspenseLoader;
