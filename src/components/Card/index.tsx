import { FiShoppingBag } from "react-icons/fi";

import watch from "../../assets/apple-watch.png";
import { ButoonAlign, Container, Content } from "./styled";

export const Card = () => {
  return (
    <Container>
      <img src={watch} />
      <Content>
        <h2>Apple Watch Series 4 GPS</h2>
        <h3 className="price">R$399</h3>
      </Content>
      <h3 className="description">
        Redesigned from scratch and completely revised.
      </h3>
      <ButoonAlign>
        <FiShoppingBag className="icons" />
        <h2>COMPRAR</h2>
      </ButoonAlign>
    </Container>
  );
};
