import { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { TextWrapper } from './style';
import { TextProps } from '@/interfaces';

const Text: FC<TextProps> = ({ className, color = 'secondary', flex, children, ...rest }) => {
  return (
    <TextWrapper className={clsx('MuiText-' + color, { flexItem: flex })} {...rest}>
      {children}
    </TextWrapper>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'success', 'info', 'black']),
};

export default Text;
