import styled from "styled-components";

export const ContainerResultsPage = styled.div`
  background-color: var(--gray);
  height: auto;
  padding-bottom: 40px;
  display: grid;
  align-items: center;
  gap: 40px;
  justify-items: center;

  @media (min-width: 1200px) {
    height: calc(100vh - 335px);
    padding: 50px 300px;
  }

  .resultsAmount {
    margin-bottom: 20px;

    @media (min-width: 1200px) {
      font-size: 20px;
    }
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  background-color: var(--primary);
  padding: 20px 30px;

  @media (min-width: 1200px) {
    display: none;

    form {
      width: 600px;
      margin: 0 auto;
    }
  }

  form {
    gap: 10px;
  }

  input {
    padding: 13px;
  }

  button {
    border-radius: 20px;
    background-color: var(--pink);
    color: var(--white);
    padding: 9px;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 80px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ContainerButtons = styled.div`
  button {
    font-size: 30px;
    padding: 2px 15px;
    font-weight: bold;
    border: none;
    background: var(--secondary);
    color: var(--white);
    margin-right: 10px;
    border-radius: var(--border-radius);
  }

  @media(min-width: 769px){
    button:hover {
      background: var(--primary)
    }

  }
`;
