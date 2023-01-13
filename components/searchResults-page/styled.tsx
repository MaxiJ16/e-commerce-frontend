import styled from "styled-components";

export const ContainerResultsPage = styled.div`
  background-color: var(--gray);
  padding-bottom: 40px;
  display: grid;
  gap: 40px;
  align-items: center;
  justify-items: center;

  @media (min-width: 1200px) {
    background-color: white;
    padding: 50px 0px;
    min-height: 65.5vh;
    width: 1000px;
    margin: 0 auto;
  }

  .resultsAmount {
    margin-bottom: 20px;

    @media (min-width: 1200px) {
      font-size: 20px;
    }
  }

  .containerLoader {
    height: 300px;
    width: 300px;
    display: grid;
    gap: 20px;
    place-items: center;
  }

  .containerCircles {
    .circles {
      width: 30px;
      height: 30px;
      margin: 13px;
      background-color: var(--primary);
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

  @media (min-width: 769px) {
    button:hover {
      background: var(--primary);
    }
  }
`;

export const ContainerNoResults = styled.div`
  padding: 30px;
  text-align: center;
  display: grid;
  gap: 30px;

  p {
    color: var(--primary);
  }

  @media (min-width: 769px) {
    margin-bottom: 230px;
    gap: 40px;
    h2 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }
  }
`;
