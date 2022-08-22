import { BsCart4 } from "react-icons/bs";

import logo from "../../assets/logo.png";
import { Container, Content } from "./styled";

export const Header = () => {
  return (
    <Container>
      <img src={logo} />
      <Content>
        <BsCart4 />
        <h5>1</h5>
      </Content>
    </Container>
  );
};
