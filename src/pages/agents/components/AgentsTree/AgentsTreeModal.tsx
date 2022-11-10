import React, { useMemo } from 'react';
import { Form, Typography } from 'antd';

import Modal from '@/components/modal/Modal';
import { TYPE_MODAL } from '@/pages/agents/model';
import CreateReferralForm from '@/pages/agents/components/AgentsTree/CreateReferralForm';
import ChangePasswordForm from '@/pages/agents/components/AgentsTree/ChangePasswordForm';
import PaymentForm from '@/pages/agents/components/AgentsTree/PaymentForm';
import { ChangePoint, ChangeUsername } from '@/pages/agents/components/AgentsTree/ChangeUsernameAndPoint';
import { validateMessage_en, validateMessage_kr } from '@/constants/validateMessage';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/hookStore';
import { LANGUAGE } from '@/common/enum';
import { showConfirm } from '@/components/modal/ModalConfirm';

export interface IAgentsTreeModalProps {
  closeModal: () => void;
  visible: boolean;
  type: TYPE_MODAL;
}

const { Title } = Typography;
// t('agents.referralForm.agent_parent')

const AgentsTreeModal: React.FC<IAgentsTreeModalProps> = ({ closeModal, visible, type }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.common.languageInput);

  const onSubmit = (value: any) => {
    console.log(value);
    showConfirm();
  };

  const titleModal: { [props: string]: string } = useMemo(
    () => ({
      [TYPE_MODAL.PAYMENT]: t('agents.paymentForm.title'),
      [TYPE_MODAL.CHANGE_PW]: t('agents.ChangePwForm.title'),
      [TYPE_MODAL.CREATE_REF]: t('agents.referralForm.title'),
      [TYPE_MODAL.CHANGE_USERNAME]: t('agents.changeUsernameForm.title'),
      [TYPE_MODAL.CHANGE_POINTS]: t('agents.changePointForm.title'),
    }),
    [t],
  );

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
        <Form
          validateMessages={language === LANGUAGE.EN ? validateMessage_en : validateMessage_kr}
          layout={'vertical'}
          form={form}
          onFinish={onSubmit}>
          {renderForm()}
        </Form>
      }
    />
  );
};
export default AgentsTreeModal;
