import React, { ReactNode } from 'react';
import { Input } from 'antd';
import './InputField.scss';
interface InputFieldProps {
  icon: ReactNode;
  labelName: string;
  name: string;
  placeholder: string;
  size: 'large' | 'middle' | 'small';
}
const InputField: React.FC<InputFieldProps> = ({
  icon,
  labelName,
  name,
  placeholder,
  size = 'large',
}: InputFieldProps): JSX.Element => {
  return (
    <>
      <div className="wraper-label">
        <label htmlFor={name}>{labelName}</label>
      </div>
      <Input prefix={icon} placeholder={placeholder} size={size} id={name} />
    </>
  );
};

export default InputField;
