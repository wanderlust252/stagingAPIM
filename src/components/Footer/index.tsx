import { Box, Typography } from '@mui/material';
import { FooterWrapper } from './style';

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        pb={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between">
        <Box>
          <Typography variant="subtitle1">&copy; 2022 - Admin</Typography>
        </Box>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
