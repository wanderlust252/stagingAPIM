import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

const ChangePoint = () => {
  const { t } = useTranslation();
  return (
    <Form.Item rules={[{ required: true }]} label={`${t('agents.changePointForm.percent_point')}`} name={'points'}>
      <Input />
    </Form.Item>
  );
};

const ChangeUsername = () => {
  const { t } = useTranslation();
  return (
    <Form.Item rules={[{ required: true }]} label={`${t('agents.changeUsernameForm.new_username')}`} name={'username'}>
      <Input />
    </Form.Item>
  );
};
export { ChangeUsername, ChangePoint };
