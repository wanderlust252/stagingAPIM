import React, { ReactNode } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Result, Space } from 'antd';
import { useAppDispatch } from '@/hooks/hookStore';
import i18n from '@/i18n';

interface IModalDynamicProps {
  dispatchAction?: () => void;
  contentButton: string;
  title: string;
  content: ReactNode;
}

const ModalConfirm: React.FC<IModalDynamicProps> = ({
  title,
  content,
  contentButton,
  dispatchAction,
}: IModalDynamicProps) => {
  const dispatch = useAppDispatch();
  const confirm = () => {
    Modal.confirm({
      title: title,
      icon: <ExclamationCircleOutlined />,
      content: content,
      onOk() {
        console.log('OK');
        const success = true;
        dispatchAction && dispatch(dispatchAction());
        if (success) {
          Modal.success({
            content: 'some messages...some messages...',
          });
        } else {
          Modal.error({
            title: 'This is an error message',
            content: 'some messages...some messages...',
          });
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  return (
    <Space wrap>
      <Button onClick={confirm}>{contentButton}</Button>
    </Space>
  );
};

export const showConfirm = (callback?: VoidFunction) => {
  Modal.confirm({
    width: 500,
    icon: null,
    content: <Result status="warning" title={`${i18n.t('common.modal.confirm')}`} />,
    onOk() {
      const success = false;
      if (success) {
        showSuccess();
        if (callback) callback();
      } else {
        showError();
      }
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

export const showError = () => {
  Modal.confirm({
    width: 500,
    icon: null,
    content: <Result status="error" title={`${i18n.t('common.modal.error')}`} />,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onOk() {},
    okCancel: false,
  });
};

export const showSuccess = () => {
  Modal.confirm({
    width: 500,
    icon: null,
    content: <Result status="success" title={`${i18n.t('common.modal.success')}`} />,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onOk() {},
    okCancel: false,
  });
};

export default ModalConfirm;
