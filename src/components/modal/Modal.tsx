import { Modal } from 'antd';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface IModalProps {
  isModalOpen: boolean;
  title: ReactNode;
  setIsModalOpen: (value: boolean) => void;
  content: ReactNode;
  callback?: () => void;
  style?: React.CSSProperties;
}

const StyledModal = styled(Modal)`
  &&&.ant-modal {
    top: 50px;
    .ant-modal-content {
      overflow: auto;
    }
  }
`;
const ModalComponent: React.FC<IModalProps> = ({
  content,
  callback,
  isModalOpen,
  setIsModalOpen,
  title,
  style,
}: IModalProps) => {
  const handleOk = () => {
    setIsModalOpen(false);
    // handle action
    if (callback) callback();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledModal style={style} title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {content}
    </StyledModal>
  );
};

export default ModalComponent;
