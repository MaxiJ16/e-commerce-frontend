import styled from "styled-components";

export const ContainerLogin = styled.section`
  width: 100%;
  min-height: 50vh;
  padding: 60px 40px;
  display: grid;
  place-items: center;

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  button {
    color: var(--white);
  }

  @media (min-width: 769px) {
    min-height: 66vh;
    width: 600px;
    margin: 0 auto;

    h1,
    p {
      text-align: center;
    }

    h1 {
      font-size: 50px;
    }
  }
`;
