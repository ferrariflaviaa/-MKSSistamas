import { FiShoppingBag } from "react-icons/fi";

import { Container, Content } from "./styled";

export interface IDataProps {
  photo: string;
  name: string;
  description: string;
  price: string;
  id: number;
}
interface ICardProps {
  data: IDataProps;
  handleClick: (data: IDataProps) => void;
}

export const Card = ({ data, handleClick }: ICardProps) => {
  const { photo, name, description, price, id } = data;
  return (
    <Container key={id}>
      <img src={photo} />
      <div className="definitions">
        <Content>
          <h2>{name}</h2>
          <span className="price">{price}</span>
        </Content>
        <h3 className="description">{description}</h3>
      </div>
      <button className="buttonAlign" onClick={() => handleClick(data)}>
        <FiShoppingBag className="icons" />
        <span>COMPRAR</span>
      </button>
    </Container>
  );
};
