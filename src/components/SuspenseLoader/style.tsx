import { Box, styled } from '@mui/material';
export const Loading = styled(Box)(
  () => `
    opacity: 1;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: transparent;
    backdrop-filter :blur(2px);
    z-index: 100;
  `,
);
