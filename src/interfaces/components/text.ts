import { ReactNode } from 'react';

export interface TextProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info' | 'black';
  flex?: boolean;
  children?: ReactNode;
}

export interface LabelTextProps {
  message: string | undefined;
}
