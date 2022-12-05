import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
`;

export const FirtsPageContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0px 36px;

  @media (min-width: 769px) {
    width: 400px;
    height: 94vh;
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 10px;
  }

  label {
    margin: 10px 0;
  }
`;
