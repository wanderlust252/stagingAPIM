import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Divider,
  IconButton,
  Tooltip,
  FormControl,
  InputAdornment,
  FormHelperText,
} from '@mui/material';
import Logo from 'src/components/LogoSign';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import { MainContent, TypographyH1, TypographyH3, OutlinedInputWrapper, ButtonNotify } from './style';
import { TODO } from '@/interfaces';

function StatusComingSoon() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2023`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TODO>(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents: TODO = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <Box textAlign="center" px={3}>
        <TypographyH1 variant="h1">{timeLeft[interval]}</TypographyH1>
        <TypographyH3 variant="h3">{interval}</TypographyH3>
      </Box>,
    );
  });

  return (
    <>
      <MainContent>
        <Container maxWidth="md">
          <Logo />
          <Box textAlign="center" mb={3}>
            <Container maxWidth="xs">
              <Typography variant="h1" sx={{ mt: 4, mb: 2 }}>
                Coming Soon
              </Typography>
              <Typography variant="h3" color="text.secondary" fontWeight="normal" sx={{ mb: 4 }}>
                We're working on implementing the last features before our launch!
              </Typography>
            </Container>
            <img alt="Coming Soon" height={200} src="/static/images/status/coming-soon.svg" />
          </Box>

          <Box display="flex" justifyContent="center">
            {timerComponents.length ? timerComponents : <>Time's up!</>}
          </Box>

          <Container maxWidth="sm">
            <Box sx={{ textAlign: 'center', p: 4 }}>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInputWrapper
                  type="text"
                  placeholder="Enter your email address here..."
                  endAdornment={
                    <InputAdornment position="end">
                      <ButtonNotify variant="contained" size="small">
                        Notify Me
                      </ButtonNotify>
                    </InputAdornment>
                  }
                  startAdornment={
                    <InputAdornment position="start">
                      <MailTwoToneIcon />
                    </InputAdornment>
                  }
                />
                <FormHelperText>We'll email you once our website is launched!</FormHelperText>
              </FormControl>
              <Divider sx={{ my: 4 }} />
              <Box sx={{ textAlign: 'center' }}>
                <Tooltip arrow placement="top" title="Facebook">
                  <IconButton color="primary">
                    <FacebookIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="top" title="Twitter">
                  <IconButton color="primary">
                    <TwitterIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="top" title="Instagram">
                  <IconButton color="primary">
                    <InstagramIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

export default StatusComingSoon;
