import { FC } from 'react';
import { LabelTextProps } from '@/interfaces';
import { LabelStyled } from './style';

const LabelComponent: FC<LabelTextProps> = ({ message }) => {
  return (
    <>
      <LabelStyled>{message}</LabelStyled>
    </>
  );
};

export default LabelComponent;
