import styled from "styled-components";

export const ButtonContainer = styled.div`
  button {
    display: none;
    height: 37px;
    width: 172px;
    padding: 0;
  }

  @media (min-width: 769px) {
    button {
      display: block;
    }
  }
`;

export const MenuContainer = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`;

export const MenuTrigger = styled.div`
  svg {
    stroke: var(--white);
    position: absolute;
    top: 20px;
    right: 20px;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100px;
  right: 20px;
  background-color: var(--gray);
  border-radius: var(--border-radius);
  padding: 10px;
  width: 210px;

  :before {
    content: "";
    position: absolute;
    top: -5px;
    right: 20px;
    height: 20px;
    width: 20px;
    background-color: var(--gray);
    transform: rotate(45deg);
    border-top: 2px solid var(--primary);
    border-left: 2px solid var(--primary);
   
  }

  :hover {
    border: 2px solid var(--primary);
  }

  .greeting {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: var(--black);
    width: 100%;
    text-align: center;
    font-size: 17px;
    padding: 15px 0;
    font-weight: 500;
    line-height: 1.2rem;
  }

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 500ms ease;
  }

  &.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 500ms ease;
  }
`;
export const Ul = styled.ul`
  padding: 0;
  margin: 0 auto;
`;
export const DropdownItem = styled.li`
  width: 170px;
  padding: 5px 0;
  margin: 8px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e6e3e3;
  border-radius: var(--border-radius);

  &:hover {
    background-color: var(--primary);
  }

  svg {
    max-width: 20px;
    margin-right: 10px;
    opacity: 0.5;
    transition: 500ms;
    stroke: var(--black);
  }

  &:hover a {
    color: var(--white);
    cursor: pointer;
  }

  &:hover svg {
    stroke: var(--white);
    opacity: 1;
    cursor: pointer;
  }

  & a {
    color: var(--black);
    max-width: 100px;
    margin-left: 10px;
    transition: 500ms;
    font-weight: 500;
  }
`;

export const Span = styled.span`
  color: var(--primary);
  font-weight: 600;
`;
