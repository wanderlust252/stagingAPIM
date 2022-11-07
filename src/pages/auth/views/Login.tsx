import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Form, Checkbox, Input, Button , notification, Image } from 'antd';

import '../styles/login.scss';

const Login: React.FC = (): JSX.Element => {
  const [loading] = useState(false);

  return (
    <div className="login__container">
      <div className="login__wraper">
        <h1>Api management</h1>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
          <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập email!' }]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Nhập email"
              className="user"
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
            <Input
              type="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              className="password"
              placeholder="Nhập mật khẩu"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button primary-bg font-size-16 text-uppercase"
              loading={loading}>
              <span className="font-size-16">Đăng nhập</span>
            </Button>
          </Form.Item>
          <Form.Item>
            <div className="display-flex-center justify-content-between">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              {/* <a
                href="javascript:;"
                className="primary-color-txt font-size-16"
                onClick={showModal}
              >
                Đăng ký tài khoản
              </a> */}

              <a href="login" className="login-form-forgot primary-color-txt font-size-16">
                Quên mật khẩu
              </a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
