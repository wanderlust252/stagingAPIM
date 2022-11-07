import React from 'react';
import { Form, Typography } from 'antd';

import Modal from '@/components/modal/Modal';
import { TYPE_MODAL } from '@/pages/agents/model';
import CreateReferralForm from '@/pages/agents/components/AgentsTree/CreateReferralForm';
import ChangePasswordForm from '@/pages/agents/components/AgentsTree/ChangePasswordForm';
import PaymentForm from '@/pages/agents/components/AgentsTree/PaymentForm';
import { ChangePoint, ChangeUsername } from '@/pages/agents/components/AgentsTree/ChangeUsernameAndPoint';

export interface IAgentsTreeModalProps {
  closeModal: () => void;
  visible: boolean;
  type: TYPE_MODAL;
}

const { Title } = Typography;

const titleModal: { [props: string]: string } = {
  [TYPE_MODAL.PAYMENT]: '에이전트 포인트 지급&차감',
  [TYPE_MODAL.CHANGE_PW]: '비밀번호 변경',
  [TYPE_MODAL.CREATE_REF]: '하부생성',
  [TYPE_MODAL.CHANGE_USERNAME]: '닉네임 변경',
  [TYPE_MODAL.CHANGE_POINTS]: '포인트요율 변경',
};

const AgentsTreeModal: React.FC<IAgentsTreeModalProps> = ({ closeModal, visible, type }) => {
  const [form] = Form.useForm();

  const onSubmit = (value: any) => {
    console.log(value);
  };

  const renderForm = () => {
    switch (type) {
      case TYPE_MODAL.CREATE_REF:
        return <CreateReferralForm />;
      case TYPE_MODAL.CHANGE_PW:
        return <ChangePasswordForm />;
      case TYPE_MODAL.PAYMENT:
        return <PaymentForm />;
      case TYPE_MODAL.CHANGE_POINTS:
        return <ChangePoint />;
      case TYPE_MODAL.CHANGE_USERNAME:
        return <ChangeUsername />;
      default:
        return '';
    }
  };

  return (
    <Modal
      title={<Title level={5}>{titleModal[type]}</Title>}
      setIsModalOpen={closeModal}
      isModalOpen={visible}
      callback={() => form.submit()}
      content={
        <Form layout={'vertical'} form={form} onFinish={onSubmit}>
          {renderForm()}
        </Form>
      }
    />
  );
};
export default AgentsTreeModal;
