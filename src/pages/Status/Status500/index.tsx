import { useState } from 'react';
import { Box, Typography, Hidden, Container, Button, Grid } from '@mui/material';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import LoadingButton from '@mui/lab/LoadingButton';
import { GridWrapper, MainContent, TypographyPrimary, TypographySecondary } from './style';

function Status500() {
  const [pending, setPending] = useState(false);
  function handleClick() {
    setPending(true);
  }

  return (
    <>
      <MainContent>
        <Grid container sx={{ height: '100%' }} alignItems="stretch" spacing={0}>
          <Grid xs={12} md={6} alignItems="center" display="flex" justifyContent="center" item>
            <Container maxWidth="sm">
              <Box textAlign="center">
                <img alt="500" height={260} src="/static/images/status/500.svg" />
                <Typography variant="h2" sx={{ my: 2 }}>
                  There was an error, please try again later
                </Typography>
                <Typography variant="h4" color="text.secondary" fontWeight="normal" sx={{ mb: 4 }}>
                  The server encountered an internal error and was not able to complete your request
                </Typography>
                <LoadingButton
                  onClick={handleClick}
                  loading={pending}
                  variant="outlined"
                  color="primary"
                  startIcon={<RefreshTwoToneIcon />}>
                  Refresh view
                </LoadingButton>
                <Button href="/overview" variant="contained" sx={{ ml: 1 }}>
                  Go back
                </Button>
              </Box>
            </Container>
          </Grid>
          <Hidden mdDown>
            <GridWrapper xs={12} md={6} alignItems="center" display="flex" justifyContent="center" item>
              <Container maxWidth="sm">
                <Box textAlign="center">
                  <TypographyPrimary variant="h1" sx={{ my: 2 }}>
                    Tokyo Free White React Typescript Admin Dashboard
                  </TypographyPrimary>
                  <TypographySecondary variant="h4" fontWeight="normal" sx={{ mb: 4 }}>
                    High performance React template built with lots of powerful Material-UI components across multiple
                    product niches for fast &amp; perfect apps development processes.
                  </TypographySecondary>
                  <Button href="/overview" size="large" variant="contained">
                    Overview
                  </Button>
                </Box>
              </Container>
            </GridWrapper>
          </Hidden>
        </Grid>
      </MainContent>
    </>
  );
}

export default Status500;
