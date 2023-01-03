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

  .containerCircles {
    @media (min-width: 769px) {
      margin: 0 260px;
    }

    .circles {
      background-color: var(--primary);
      height: 16px;
      width: 16px;
      margin: 6px;

      @media (min-width: 769px) {
        height: 30px;
        width: 30px;
        margin: 10px;
      }
    }
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
