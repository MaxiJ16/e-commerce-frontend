import styled from "styled-components";

export const ContainerResultsPage = styled.div`
  height: auto;
  padding-bottom: 40px;
  display: grid;
  align-items: center;
  gap: 40px;
  justify-items: center;

  @media(min-width: 1200px){
    height: calc(100vh - 381px);
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  background-color: var(--black);
  padding: 25px;

  @media (min-width: 1200px) {
    display: none;

    form {
      width: 600px;
      margin: 0 auto;
    }
  }

  input {
    background-color: var(--black);
    color: var(--white);
    border: 3px solid var(--white);
    border-radius: 8px;
  }

  button {
    background-color: var(--orange);
    color: var(--black);
    padding: 9px;
    margin-top: 5px;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 53px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 100px;
  }
`;
