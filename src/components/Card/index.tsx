import { FiShoppingBag } from "react-icons/fi";

import watch from "../../assets/apple-watch.png";
import { ButoonAlign, Container, Content } from "./styled";

interface ICardProps {
  img: string;
  name: string;
  description: string;
  price: string;
  key: string;
}

export const Card = ({ img, name, description, price, key }: ICardProps) => {
  return (
    <Container key={key}>
      <img src={img} />
      <Content>
        <h2>{name}</h2>
        <span className="price">{price}</span>
      </Content>
      <h3 className="description">{description}</h3>
      <ButoonAlign>
        <FiShoppingBag className="icons" />
        <h2>COMPRAR</h2>
      </ButoonAlign>
    </Container>
  );
};
