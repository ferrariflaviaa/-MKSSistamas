import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
export const CardList = styled.div`
  width: 100%;
  max-height: 100px;
  display: flex;
  flex-direction: row;
  margin: 2rem 0.5rem 0;
  padding: 2rem 0.8rem;
  justify-content: space-between;
  align-items: center;
  background-color: #ffff;
  border-radius: 8px;

  img {
    width: 4rem;
    /* height: 4rem; */
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.18rem;
    margin-right: 0.5rem;
  }
  .icon-modal {
    /* width: 2rem; */
    font-size: 1.5rem;
    position: relative;
    bottom: 130%;
    left: 5%;
  }

  .quantity {
    display: flex;
    flex-direction: column;

    span {
      font-size: 0.7rem;
    }
  }

  .quantityBox {
    border: 2px solid var(--background);
    padding: 0.3rem;
    border-radius: 3px;
    color: var(--text);
    text-align: center;
    margin-bottom: 1.5rem;
    span {
      padding-left: 0.3rem;
    }
  }
`;
