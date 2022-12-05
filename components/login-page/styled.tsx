import styled from "styled-components";

export const ContainerLogin = styled.section`
  width: 100%;
  height: calc(100vh - 408px);
  padding: 40px 20px 75px;

  h1 {
    margin-bottom: 28px;
  }

  button {
    margin-top: 14px;
    color: var(--black)
  }

  @media(min-width: 769px){
    width: 500px;
    height: calc(100vh - 470px);
    margin: 0 auto;
    margin-top: 100px;
  }
`;
