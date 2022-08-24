import { useState } from "react";

import { Header } from "../../components/Header";
import { ModalProduct } from "../../components/ModalProduct";
import { Products } from "../../components/Products";

export function Welcome() {
  // CRIANDO A MODAL
  const [modalOpen, setModalOpen] = useState(false);

  // USUARIO ABRINDO:
  function handleModalOpen() {
    setModalOpen(true);
  }

  // USARIO FECHANDO:
  function handleCloseModal() {
    setModalOpen(false);
  }
  return (
    <>
      <Header modalOpen={handleModalOpen} />
      <Products />
      <ModalProduct modalOpen={modalOpen} onRequestClose={handleCloseModal} />
    </>
  );
}
