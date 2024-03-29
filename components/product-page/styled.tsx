import styled from "styled-components";

export const ContainerProductPage = styled.div`
  @media (min-width: 1200px) {
    min-height: 65vh;
    background-color: var(--gray);
  }
`;

export const ContainerProductDetail = styled.div`
  height: auto;
  width: 100%;
  padding: 30px 30px 80px;
  display: grid;
  justify-items: center;
  gap: 20px;

  @media (min-width: 769px) {
    padding: 80px;
  }

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 90px 80px 101px;
    margin: 0 auto;
    gap: 30px;
  }
  button {
    background-color: var(--primary);
    padding: 20px 12px;

    h2 {
      font-size: 24px;
    }
  }
`;

export const ContainerDetail = styled.div`
  width: 100%;
  display: grid;
  gap: 25px;
  text-align: center;

  h1 {
    font-size: 40px;
    color: var(--primary);
  }

  h2 {
    font-size: 30px;
  }

  @media (min-width: 1280px) {
    width: 30%;
  }

  button:hover {
    background-color: var(--secondary);
  }
`;

export const ContainerImg = styled.div``;

export const ProductImg = styled.img`
  width: 100%;
  min-width: 300px;
  max-width: 400px;
  height: auto;
  max-height: 300px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;

  @media (min-width: 1200px) {
    max-width: 700px;
    max-height: 450px;
    margin-right: 20px;
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

export const ContainerLoader = styled.div`
  height: 70vh;
  width: 100%;
  display: grid;
  gap: 20px;
  place-items: center;
  background-color: var(--gray);

  .containerCircles {
    background-color: var(--gray);

    .circles {
      width: 30px;
      height: 30px;
      margin: 13px;
      background-color: var(--primary);
    }
  }
`;
