import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { CardList, Container } from "./styled";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface cartModalProps {
  modalOpen: boolean;
  onRequestClose: () => void;
}

export const ModalProduct = ({ modalOpen, onRequestClose }: cartModalProps) => {
  const cart = useSelector((state: RootState) => state.stock);
  return (
    <Container>
      <Modal
        isOpen={modalOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <div className="header">
          <h1>Carrinho de compras</h1>
          <AiFillCloseCircle className="img-modal" onClick={onRequestClose} />
        </div>
        <div className="scroll">
          {cart.map((item) => {
            return (
              <CardList>
                <div className="row-card">
                  <img src={item.photo} />
                  <h2>{item.name}</h2>
                </div>
                <div className="quantity">
                  <span>Qtd:</span>
                  <div className="quantityBox">
                    <span>- |</span>
                    <span>{item.quantity}</span>
                    <span>| +</span>
                  </div>
                </div>
                <div className="price-card">
                  <h2>
                    <b>R${item.price}</b>
                  </h2>
                </div>
                <div className="icon-card">
                  <div>
                    <AiFillCloseCircle
                      className="icon-modal"
                      onClick={onRequestClose}
                    />
                  </div>
                </div>
              </CardList>
            );
          })}
        </div>
      </Modal>
    </Container>
  );
};
