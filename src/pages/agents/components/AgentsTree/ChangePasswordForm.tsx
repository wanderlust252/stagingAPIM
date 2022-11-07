import React from 'react';
import { Space, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export interface IChangePasswordProps {}

const ChangePasswordForm: React.FC<IChangePasswordProps> = ({}) => {
  return (
    <Space className={'full-width'} direction={'vertical'}>
      <Form.Item label={'새 비밀번호'} name={'username'}>
        <Input.Password iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
      </Form.Item>
      <Form.Item label={'새 비밀번호 재입력'} name={'username'}>
        <Input.Password iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
      </Form.Item>
    </Space>
  );
};
export default ChangePasswordForm;
