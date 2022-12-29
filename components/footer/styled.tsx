import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 35vh;
  background-color: var(--primary);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 760px) {
    height: 25vh;
    flex-direction: row;
    align-items: center;
    padding: 50px;
  }
`;

export const FooterContent = styled.div`
  color: var(--white);
  display: grid;
  gap: 16px;

  a {
    display: flex;
    color: var(--white);
  }

  svg {
    margin-right: 10px;
  }
`;
