import { FC } from 'react';
import { styled } from '@mui/material/styles';

interface TMessageErrorPropsType {
  message: string | undefined;
}

const TextWrapper = styled('p')({
  margin: 0,
  color: 'red',
});

const MessageErrorComponent: FC<TMessageErrorPropsType> = ({ message }) => {
  return (
    <>
      <TextWrapper>{message}</TextWrapper>
    </>
  );
};

export default MessageErrorComponent;
