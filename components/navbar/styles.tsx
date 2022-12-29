import styled from "styled-components";

export const Header = styled.header``;

export const NavContainer = styled.nav`
  padding: 1rem;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  @media (min-width: 769px) {
    padding: 21px;
  }

  .burguer {
    z-index: 2;
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
    transition: all 0.6s ease;

    @media (min-width: 769px) {
      position: initial;
      margin: 0;
      padding: 21px;
    }
  }

  .link-container.active {
    width: 75%;
    padding: 10px 20px 30px;
    border-radius: var(--border-radius);
    background-color: var(--white);
    display: grid;
    gap: 25px;
    top: 25%;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 2;

    @media (min-width: 769px) {
      position: initial;
      margin: 0;
      width: auto;
    }

    svg {
      stroke: var(--white);
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .loginButton {
    background-color: var(--secondary);
    color: var(--black);
    width: auto;
    height: auto;
    padding: 10px 15px;
  }

  @media (min-width: 769px) {
    .loginButton {
      display: none;
    }
  }
`;

export const BgDiv = styled.div`
  background-color: var(--black);
  position: absolute;
  border-radius: 0 0 30px 0;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: fixed;
  transition: all 0.6s ease;

  &.active {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;

    @media (min-width: 769px) {
      top: -1000px;
      left: -1000px;
    }
  }
`;

export const ContainerContent = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  .X {
    background-color: var(--danger);
    color: var(--white);
    font-size: 22px;
    font-weight: 600;
    border-radius: 50%;
    padding: 2px;
    width: 30px;
    height: 30px;
    position: relative;
    left: 90%;
  }
`;
export const ContainerForm = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: initial;
    width: 600px;

    form {
      display: flex;
      height: 50px;

      button {
        background-color: var(--pink);
        color: var(--white);
      }

      input {
        background-color: var(--white);
        color: var(--black);
        height: 48px;
        border: 1px solid white;
      }
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
