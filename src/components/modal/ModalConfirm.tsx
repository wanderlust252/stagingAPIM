import React, { ReactNode } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useAppDispatch } from '@/hooks/hookStore';
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

export default ModalConfirm;
