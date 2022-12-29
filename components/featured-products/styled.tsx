import styled from "styled-components";

export const FeaturedProductsContainer = styled.div`
  width: 100%;
  padding: 51px 24px 100px;
  display: grid;
  gap: 80px;
  text-align: center;
  background-color: var(--gray);
  border-radius: var(--border-radius);

  h2 {
    color: var(--black);
  }
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 80px;
  justify-items: center;

  @media (min-width: 769px) {
    width: 700px;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
  }
`;
