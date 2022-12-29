import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
`;

export const FirtsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0px 36px;
  margin: 90px 0;

  @media (min-width: 769px) {
    width: 500px;
    height: 60vh;
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 10px;
  }

  @media (min-width: 769px) {
    h1 {
      width: 350px;
      margin: 0 auto;
      margin-bottom: 15px;
    }
  }

  label {
    margin: 10px 0;
  }
`;
