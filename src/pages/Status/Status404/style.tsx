import { Box, Button, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
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

export const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
  `,
);

export const ButtonSearch = styled(Button)(
  ({ theme }) => `
      margin-right: -${theme.spacing(1)};
  `,
);
