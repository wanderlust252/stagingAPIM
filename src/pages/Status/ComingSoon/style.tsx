import { styled } from '@mui/material/styles';
import { Box, Typography, OutlinedInput, Button } from '@mui/material';

export const MainContent = styled(Box)(
  () => `
      height: 100%;
      display: flex;
      flex: 1;
      overflow: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `,
);

export const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(75)};
  `,
);

export const TypographyH3 = styled(Typography)(
  ({ theme }) => `
    color: ${theme.colors.alpha.black[50]};
  `,
);

export const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
  `,
);

export const ButtonNotify = styled(Button)(
  ({ theme }) => `
      margin-right: -${theme.spacing(1)};
  `,
);
