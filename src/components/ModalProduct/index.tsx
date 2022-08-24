import { useState } from "react";
import Modal from "react-modal";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface cartModalProps {
  modalOpen: boolean;
  onRequestClose: () => void;
}

export const ModalProduct = ({ modalOpen, onRequestClose }: cartModalProps) => {
  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="modal-content"
      >
        <span>teste</span>
      </Modal>
    </div>
  );
};
