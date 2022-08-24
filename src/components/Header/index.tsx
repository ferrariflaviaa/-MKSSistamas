import { BsCart4 } from "react-icons/bs";
import Modal from "react-modal";

import logo from "../../assets/logo.png";
import { Container, Content } from "./styled";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface HeaderProps {
  modalOpen: () => void;
}
export const Header = ({ modalOpen }: HeaderProps) => {
  return (
    <Container>
      <img src={logo} />
      <Content onClick={modalOpen}>
        <BsCart4 />
        <h5>1</h5>
      </Content>
    </Container>
  );
};
