import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UseFormReset } from 'react-hook-form/dist/types';

interface IAgentTreeModal {
  show: boolean;
  closeModal: () => void;
  title: string;
  reset: UseFormReset<Record<string, string>>;
}

const AgentTreeModal: React.FC<IAgentTreeModal> = ({ children, closeModal, show, title, reset }) => {
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title as={'h5'}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button size="sm" variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button form="hook-form" size="sm" variant="primary" type="submit">
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AgentTreeModal;
