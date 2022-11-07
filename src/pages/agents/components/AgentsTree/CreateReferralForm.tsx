import React from 'react';
import { Form, Input, InputNumber, Select, Space } from 'antd';

export interface ICreateReferralFormProps {}

const CreateReferralForm: React.FC<ICreateReferralFormProps> = ({}) => {
  return (
    <Space className={'full-width'} direction={'vertical'} size={10}>
      <Form.Item label={'상위 에이전트'} name={'username'}>
        <Input />
      </Form.Item>
      <Form.Item label={'닉네임'} name={'닉네임'}>
        <Input />
      </Form.Item>
      <Form.Item label={'아이디'} name={'username'}>
        <Input />
      </Form.Item>
      <Form.Item label={'비밀번호'}>
        <Input />
      </Form.Item>
      <Form.Item label={'비밀번호 재입력'} name={'비밀번호 재입력'}>
        <Input />
      </Form.Item>
      <Form.Item label={'포인트요율(%)'} name={'포인트요율(%)'}>
        <InputNumber className={'full-width'} />
      </Form.Item>
      <Form.Item name={'is_active'} label="에이전트 권한">
        <Select style={{ zIndex: '100000' }}>
          <Select.Option value={'1'}>Agent A</Select.Option>
          <Select.Option value={'2'}>Agent B</Select.Option>
        </Select>
      </Form.Item>
    </Space>
  );
};
export default CreateReferralForm;
