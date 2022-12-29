import styled from "styled-components";

export const ContainerLogin = styled.section`
  width: 100%;
  height: calc(100vh - 381px);
  padding: 40px 40px 75px;

  h1 {
    margin-bottom: 40px;
    font-size: 35px;
  }

  button {
    color: var(--white);
    margin-top: 25px;
  }

  @media(min-width: 769px){
    width: 500px;
    height: calc(100vh - 423px);
    margin: 0 auto;
    margin-top: 100px;

    h1, p {
      text-align: center;
    }
  }
`;
