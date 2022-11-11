import { LabelTextProps } from '@/interfaces';
import { FC } from 'react';
import { TextWrapper } from './style';

const MessageErrorComponent: FC<LabelTextProps> = ({ message }) => {
  return (
    <>
      <TextWrapper>{message}</TextWrapper>
    </>
  );
};

export default MessageErrorComponent;
