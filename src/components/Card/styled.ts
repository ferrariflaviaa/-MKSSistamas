import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin: 3rem 4rem;
  &:hover {
    box-shadow: 0 0.05rem 1rem rgba(0, 0, 0, 0.13);
  }
  img {
    padding: 2rem 1rem;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .description {
    padding: 2rem 1rem;
    font-weight: 100;
    font-size: 0.8rem;
    padding: 0 1.5rem;
    color: #373737;
  }
`;

export const Content = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  display: flex;
  margin: 1rem 0 0.5rem 0;
  justify-content: center;
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
  }
`;

export const ButoonAlign = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  background-color: #0f52ba;
  padding: 0.5rem;
  border-radius: 0 0 1rem 1rem;
  color: var(--white);
  font-size: 0.7rem;
  font-weight: 600;
  cursor: pointer;

  .icons {
    width: 2rem;
    height: 1rem;
  }
`;
