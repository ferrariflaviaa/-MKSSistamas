import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 400px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  &:hover {
    box-shadow: 0 0.05rem 1rem rgba(0, 0, 0, 0.13);
  }
  img {
    padding: 2rem 1rem;
    width: 10rem;
  }

  .definitions {
    h3 {
      padding-top: 1rem;
    }
  }
  .description {
    font-weight: 100;
    font-size: 0.8rem;
    padding: 0 1.5rem;
    color: #373737;
  }

  @media (max-width: 1080px) {
  }
  @media (max-width: 720px) {
  }
  @media (max-width: 490px) {
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  color: var(--text);

  .price {
    padding: 0.5rem 0.4rem;
    border-radius: 0.5rem;
    text-align: center;
    background-color: #373737;
    color: var(--white);
    font-weight: 600;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.18rem;
    margin-right: 0.5rem;
  }
`;

export const ButoonAlign = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f52ba;
  padding: 0.5rem;
  color: var(--white);
  border-radius: 0 0 16px 16px;
  font-size: 0.7rem;
  font-weight: 600;
  cursor: pointer;

  .icons {
    width: 2rem;
    height: 1rem;
  }
`;
