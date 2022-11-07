import { Modal } from 'antd';
import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';

interface IModalProps {
  isModalOpen: boolean;
  title: ReactNode;
  setIsModalOpen: (value: boolean) => void;
  content: ReactNode;
  actionDispatch?: () => void;
}
const ModalComponent: React.FC<IModalProps> = ({
  content,
  actionDispatch,
  isModalOpen,
  setIsModalOpen,
  title,
}: IModalProps) => {
  const dispatch = useDispatch();
  const handleOk = () => {
    setIsModalOpen(false);
    // handle action
    dispatch(actionDispatch);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {content}
      </Modal>
    </>
  );
};

export default ModalComponent;
