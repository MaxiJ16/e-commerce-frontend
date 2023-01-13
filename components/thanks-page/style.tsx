import styled from "styled-components";

export const ContainerThanksPage = styled.div`
  padding: 46px;
  display: grid;
  gap: 30px;
  place-items: center;
  text-align: center;

  @media (min-width: 769px) {
    height: calc(100vh - 329px);
    padding: 120px;
    width: 700px;
    margin: 0 auto;
  }

  h2 {
    font-size: 28px;
    @media (min-width: 769px) {
      font-size: 34px;
    }
  }

  p {
    font-size: 20px;
    color: gray;

    @media (min-width: 769px) {
      font-size: 26px;
    }
  }
`;
