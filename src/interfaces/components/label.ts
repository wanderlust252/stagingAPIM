import { ReactNode } from 'react';

export interface LabelProps {
  className?: string;
  color?: 'primary' | 'black' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
  children?: ReactNode;
}
