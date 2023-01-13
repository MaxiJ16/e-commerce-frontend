import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--primary);
  padding: 30px;
  display: grid;
  gap: 30px;

  @media (min-width: 760px) {
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

  a:hover {
    color: var(--secondary);
  }

  svg {
    margin-right: 10px;
  }
`;
