import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import InputField from '../../../components/FormField/InputField';
import '../styles/login.scss';

const Login: React.FC = (): JSX.Element => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login__container">
      <div className="login__wraper">
        <h1>Api management</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <InputField
              icon={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              size="large"
              name="username"
              labelName="Username"
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <InputField
              icon={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
              size="large"
              name="password"
              labelName="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button full-w-btn">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
