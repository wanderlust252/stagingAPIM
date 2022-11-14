import React from 'react';
import Form from 'react-bootstrap/Form';
import { Controller } from 'react-hook-form';
interface InputFieldProps {
  label: string;
  type: string;
  controlId?: string;
  placeholder: string;
  name: string;
  errors?: any;
  control: any;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  type,
  controlId,
  errors,
  control,
}: InputFieldProps) => {
  console.log(errors?.[name]?.message);

  return (
    <Form.Group controlId={controlId} style={{ marginBottom: '15px' }}>
      <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>{label}</Form.Label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => {
          return (
            <Form.Control
              type={type}
              isValid={errors}
              placeholder={placeholder}
              value={value}
              ref={ref}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
            />
          );
        }}
      />
      <Form.Control.Feedback type="valid" style={{ color: 'red' }}>
        {errors?.[name]?.message && `* ${errors?.[name]?.message}`}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default InputField;
