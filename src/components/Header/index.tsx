import { BsCart4 } from "react-icons/bs";
import Modal from "react-modal";
import { useSelector } from "react-redux";

import logo from "../../assets/logo.png";
import { RootState } from "../../store";
import { Container, Content } from "./styled";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface HeaderProps {
  modalOpen: () => void;
}
export const Header = ({ modalOpen }: HeaderProps) => {
  const cart = useSelector((state: RootState) => state.stock);

  return (
    <Container>
      <img src={logo} />
      <Content onClick={modalOpen}>
        <BsCart4 />
        <h5>{cart.length}</h5>
      </Content>
    </Container>
  );
};
