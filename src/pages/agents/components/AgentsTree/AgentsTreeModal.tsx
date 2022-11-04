import React from 'react';
import { Form, Input, InputNumber, Select, Space, Typography } from 'antd';

import Modal from '@/components/modal/Modal';

export interface IAgentsTreeModalProps {
  toggleModal: () => void;
  visible: boolean;
  type: string;
}

const { Title } = Typography;

const renderModalCreateReferral = () => (
  <Space className={'full-width'} direction={'vertical'} size={10}>
    <Form.Item name={'is_active'} label="에이전트 권한">
      <Select style={{ zIndex: '100000' }}>
        <Select.Option value={'1'}>Agent A</Select.Option>
        <Select.Option value={'2'}>Agent B</Select.Option>
      </Select>
    </Form.Item>
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
  </Space>
);

const AgentsTreeModal: React.FC<IAgentsTreeModalProps> = ({ toggleModal, visible, type }) => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    console.log('ok');
  };

  return (
    <Modal
      title={<Title level={5}>하부생성</Title>}
      setIsModalOpen={toggleModal}
      isModalOpen={visible}
      callback={() => form.submit()}
      content={
        <Form layout={'vertical'} form={form} onFinish={onSubmit}>
          {renderModalCreateReferral()}
        </Form>
      }
    />
  );
};
export default AgentsTreeModal;
