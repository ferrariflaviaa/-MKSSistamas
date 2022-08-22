import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 6.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: #0f52ba;
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
`;
