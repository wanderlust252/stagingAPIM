import { FC } from 'react';
import { styled } from '@mui/material/styles';

interface LabelPropsType {
  message: string | undefined;
}

const LabelStyled = styled('label')({});

const LabelComponent: FC<LabelPropsType> = ({ message }) => {
  return (
    <>
      <LabelStyled>{message}</LabelStyled>
    </>
  );
};

export default LabelComponent;
