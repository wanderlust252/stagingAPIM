import { FC } from 'react';
import { styled } from '@mui/material/styles';

const HorizontalLine = styled('div')({
  marginTop: '.9375rem',
  marginBottom: '.9375rem',
  borderBottomStyle: 'ridge',
});
const HorizontalLineComponent: FC = () => {
  return (
    <>
      <HorizontalLine />
    </>
  );
};

export default HorizontalLineComponent;
