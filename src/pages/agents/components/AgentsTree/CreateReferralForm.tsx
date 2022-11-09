import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, InputNumber, Select, Space } from 'antd';

const CreateReferralForm = () => {
  const { t } = useTranslation();

  return (
    <Space className={'full-width'} direction={'vertical'} size={10}>
      <Form.Item
        rules={[{ required: true }]}
        label={t('agents.referralForm.agent_parent') as string}
        name={'agent_parent'}>
        <Input />
      </Form.Item>
      <Form.Item rules={[{ required: true }]} label={t('agents.referralForm.username') as string} name={'username'}>
        <Input />
      </Form.Item>
      <Form.Item rules={[{ required: true }]} label={t('agents.referralForm.user') as string} name={'User'}>
        <Input />
      </Form.Item>
      <Form.Item rules={[{ required: true }]} label={t('agents.referralForm.password') as string} name={'password'}>
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true }]}
        label={t('agents.referralForm.password_confirm') as string}
        name={'password_confirm'}>
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true }]}
        label={t('agents.referralForm.percent_point') as string}
        name={'percent_point'}>
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        rules={[{ required: true }]}
        name={'agent_privileges'}
        label={t('agents.referralForm.agent_privileges') as string}>
        <Select style={{ zIndex: '100000' }}>
          <Select.Option value={'1'}>Agent A</Select.Option>
          <Select.Option value={'2'}>Agent B</Select.Option>
        </Select>
      </Form.Item>
    </Space>
  );
};
export default CreateReferralForm;
