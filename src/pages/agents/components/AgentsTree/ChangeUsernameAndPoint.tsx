import React from 'react';
import { Form, Input } from 'antd';

const ChangePoint = () => {
  return (
    <Form.Item label={'새 닉네임 (2 ~ 15자리)'} name={'note'}>
      <Input />
    </Form.Item>
  );
};

const ChangeUsername = () => {
  return (
    <Form.Item label={'포인트요율'} name={'note'}>
      <Input />
    </Form.Item>
  );
};
export { ChangeUsername, ChangePoint };
