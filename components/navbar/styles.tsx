import styled from "styled-components";

export const Header = styled.header``;

export const NavContainer = styled.nav`
  padding: 1rem;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  p {
    color: var(--white);
    margin-right: 1rem;
  }

  .burguer {
    z-index: 1;
  }

  @media (min-width: 769px) {
    .burguer {
      display: none;
    }
  }

  .link-container {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.7s ease;

    p {
      color: var(--white);
      font-size: 2rem;
      display: block;
    }

    @media (min-width: 769px) {
      position: initial;
      margin: 0;
      p {
        font-size: 1rem;
        color: var(--white);
        display: inline;
      }
    }
  }

  .link-container.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;

    p {
      color: var(--white);
      margin-top: 31px;
    }

    @media (min-width: 769px) {
      position: initial;
      margin: 0;
      width: auto;
    }
  }
`;

export const BgDiv = styled.div`
  background-color: var(--black);
  border-radius: 0 0 30px 0;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 0;
  transition: all 0.7s ease;

  &.active {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @media (min-width: 769px) {
      top: -1000px;
      left: -1000px;
    }
  }
`;

export const ContainerForm = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: initial;
    background-color: var(--black);

    form {
      width: 700px;
      display: flex;
    }
  }

  input {
    background-color: var(--black);
    color: var(--white);
    border: 3px solid var(--white);
    border-radius: 8px;
  }

  label {
    width: 70%;
  }

  button {
    background-color: var(--orange);
    color: var(--black);
    padding: 9px;
    margin-top: 5px;
    width: 30%;
  }
`;
