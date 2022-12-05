import styled from "styled-components";

export const ContainerProductPage = styled.div`
  padding: 36px 23px 80px;
  height: auto;
  width: 100%;
  display: grid;
  gap: 21px;
  justify-items: center;

  @media(min-width: 769px){
    padding: 80px;
  }

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 90px 80px 101px;
    margin: 0 auto;
  }

  button {
    background-color: var(--light-blue);
    color: var(--black);
  }
`;

export const ContainerDetail = styled.div`
  width: 100%;
  display: grid;
  gap: 25px;

  @media (min-width: 1280px) {
    width: 30%;
  }
`;

export const ContainerImg = styled.div``;

export const ProductImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  object-position: center;

  @media (min-width: 1280px) {
    max-width: 800px;
    margin-right: 20px;
  }
`;
