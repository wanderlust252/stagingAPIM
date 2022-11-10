import React from 'react';
import { Space, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const ChangePasswordForm = ({}) => {
  const { t } = useTranslation();

  return (
    <Space className={'full-width'} direction={'vertical'}>
      <Form.Item rules={[{ required: true }]} label={`${t('agents.ChangePwForm.new_pw')}`} name={'new_pw'}>
        <Input.Password iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
      </Form.Item>
      <Form.Item
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('username') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
        label={`${t('agents.ChangePwForm.confirm_pw')}`}
        name={'confirm_pw'}>
        <Input.Password iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
      </Form.Item>
    </Space>
  );
};
export default ChangePasswordForm;
