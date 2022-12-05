import styled from "styled-components";

export const FeaturedProductsContainer = styled.div`
  width: 100%;
  padding: 51px 24px 130px;
  display: grid;
  gap: 30px;
  text-align: center;
  background-color: var(--pink);

  @media (min-width: 769px) {
    background-color: var(--light-blue);
  }

  h2 {
    margin-bottom: 20px;
    @media (min-width: 769px) {
      color: var(--black);
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 23px;
  justify-items: center;

  @media (min-width: 769px) {
    width: 700px;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
  }
`;
