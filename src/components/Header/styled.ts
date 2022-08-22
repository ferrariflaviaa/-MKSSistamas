import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 6.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: #0f52ba;

  @media (max-width: 490px) {
    display: flex;
    padding: 0 1rem;

    img {
      width: 12rem;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: var(--white);
  border-radius: 1rem;
  font-size: 1.5rem;
  cursor: pointer;

  h5 {
    padding-left: 1rem;
  }
  @media (max-width: 490px) {
    font-size: 1rem;
  }
`;
