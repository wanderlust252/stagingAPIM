import { Col, Container, Form, Row } from 'react-bootstrap';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { styled as styleMUI, Typography, Stack } from '@mui/material';
import { TreeView } from '@mui/lab';

import AgentTreeModal from '@/pages/agents/components/AgentTreeView/AgentTreeModal';
import { showConfirm, showError } from '@/utils/alert';
import ChangePasswordForm from '../components/AgentTreeView/ChangePasswordForm';
import { ChangePoint, ChangeUsername } from '../components/AgentTreeView/ChangeUsernameAndPointForm';
import TreeReferral from '../components/AgentTreeView/TreeReferral';
import TreeReferralForm from '../components/AgentTreeView/TreeReferralForm';
import { TYPE_MODAL } from '../model';
import AgentDetail from '../components/AgentTreeView/AgentDetail';
import PaymentForm from '../components/AgentTreeView/PaymentForm';

const Wrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const TreeViewStyled = styled(TreeView)`
  &&& {
    .MuiTreeItem-content {
      .MuiTreeItem-label {
        font-size: 1.1rem;
        padding: 0.5rem 0.1rem;
      }
    }
  }
`;

const Title = styleMUI(Typography)(
  ({ theme }) => `
     background-color: ${theme.colors.info.dark};
     color: white;
     padding: ${theme.spacing(1, 1)};
     border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: ${theme.typography.pxToRem(20)}
`,
);

const AgentsTreeView = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [typeModal, setTypeModal] = useState(TYPE_MODAL.NONE);
  const show = useMemo(() => typeModal !== TYPE_MODAL.NONE, [typeModal]);

  const titleModal: { [props: string]: string } = useMemo(
    () => ({
      [TYPE_MODAL.PAYMENT]: t('agents.paymentForm.title'),
      [TYPE_MODAL.CHANGE_PW]: t('agents.ChangePwForm.title'),
      [TYPE_MODAL.CREATE_REF]: t('agents.referralForm.title'),
      [TYPE_MODAL.CHANGE_USERNAME]: t('agents.changeUsernameForm.title'),
      [TYPE_MODAL.CHANGE_POINT]: t('agents.changePointForm.title'),
    }),
    [t],
  );

  const openModal = (type: TYPE_MODAL) => {
    if (type !== TYPE_MODAL.NONE) setTypeModal(type);
  };

  const closeModal = () => setTypeModal(TYPE_MODAL.NONE);

  const onSubmit = async (value: any) => {
    console.log(errors);

    const confirm = await showConfirm();
    if (!confirm) {
      showError('error');
      return;
    }
    if (!(Object.keys(errors).length === 0)) {
      const errorMessages = Object.keys(errors).map((item) => {
        return errors[item]?.message;
      });
    }
  };

  const getModalByType = () => {
    switch (typeModal) {
      case TYPE_MODAL.CHANGE_POINT:
        return <ChangePoint register={register} />;
      case TYPE_MODAL.CHANGE_PW:
        return <ChangePasswordForm register={register} />;
      case TYPE_MODAL.CHANGE_USERNAME:
        return <ChangeUsername register={register} />;
      case TYPE_MODAL.CREATE_REF:
        return <TreeReferralForm register={register} />;
      case TYPE_MODAL.PAYMENT:
        return <PaymentForm register={register} />;
      default:
        return '';
    }
  };

  return (
    <Stack direction={'column'} spacing={0.2}>
      <Typography variant={'h3'}> {t('agents.agents_tree.title')}</Typography>
      <Row className={'g-4'}>
        <Col xs={12} md={5}>
          <Title variant={'h5'}>{`${t('agents.agents_tree.sub_title.1')}`}</Title>
          <Wrapper>
            <TreeReferral />
          </Wrapper>
        </Col>
        <Col xs={12} md={7}>
          <Wrapper>
            <Title variant={'h5'}>{`${t('agents.agents_tree.sub_title.2')}`}</Title>
            <AgentDetail openModal={openModal} />
          </Wrapper>
        </Col>
      </Row>

      {show && (
        <AgentTreeModal title={titleModal[typeModal]} show={show} closeModal={closeModal}>
          <Form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
            {getModalByType()}
          </Form>
        </AgentTreeModal>
      )}
    </Stack>
  );
};

export default AgentsTreeView;
