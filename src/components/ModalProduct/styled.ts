import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  .scroll {
    overflow: scroll;
  }
`;
export const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 2rem 0.5rem 0;
  justify-content: space-between;
  align-items: center;
  background-color: #ffff;
  border-radius: 8px;

  .row-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
  }

  img {
    width: 4rem;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.18rem;
    margin-right: 0.5rem;
  }
  .icon-modal {
    font-size: 1.5rem;
    bottom: 50%;
    left: 2%;
  }

  .quantity {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    span {
      font-size: 0.7rem;
    }
  }

  .quantityBox {
    border: 0.3px solid var(--background);
    padding: 0.2rem 0.2rem;
    border-radius: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin: 0.2rem;
      cursor: pointer;
    }
  }

  .price-card {
    display: flex;
    /* justify-content: center; */
    width: 25%;
    margin: 0 0.5rem;
  }

  .icon-card {
    display: flex;
    width: 5%;
    div {
      bottom: 1.7rem;
      /* left: 1rem; */
      position: relative;
      cursor: pointer;
    }
    /* width: 100%; */
    /* align-items: flex-end;
    justify-content: center; */
  }
`;
