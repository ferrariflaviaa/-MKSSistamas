import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store";
import { decrement, increment, remove } from "../../store/Stock.store";
import { IDataProps } from "../Card";
import { CardList, Container } from "./styled";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface cartModalProps {
  modalOpen: boolean;
  onRequestClose: () => void;
}

export const ModalProduct = ({ modalOpen, onRequestClose }: cartModalProps) => {
  const cart = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();
  const [finalPrice, setFinalPrice] = useState<number>(0);

  useEffect(() => {
    let value = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < cart.length; i++) {
      value += Number(cart[i].price);
    }
    setFinalPrice(value);
  }, [cart]);

  return (
    <Container>
      <Modal
        isOpen={modalOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
      >
        <div className="content-card">
          <div className="header-content">
            <div className="header">
              <h1>Carrinho de compras</h1>
              <AiFillCloseCircle
                className="img-modal"
                onClick={onRequestClose}
              />
            </div>
            <div className="scroll">
              {cart.map((item) => {
                return (
                  <CardList key={item.id}>
                    <div className="row-card">
                      <img src={item.photo} />
                      <h2>{item.name}</h2>
                    </div>
                    <div className="quantity">
                      <span>Qtd:</span>
                      <div className="quantityBox">
                        <span onClick={() => dispatch(decrement(item))}>
                          - |
                        </span>
                        <span>{item.quantity}</span>
                        <span onClick={() => dispatch(increment(item))}>
                          | +
                        </span>
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
                          onClick={() => dispatch(remove(item))}
                        />
                      </div>
                    </div>
                  </CardList>
                );
              })}
            </div>
          </div>
          {/* <div className="footer-content"></div> */}
          <div className="total">
            <h1>Total</h1>
            <span>
              <b>R${finalPrice}</b>
            </span>
          </div>
          <button>Finalizar compra</button>
        </div>
      </Modal>
    </Container>
  );
};
