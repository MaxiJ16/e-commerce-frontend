import styled from "styled-components";
import { Tiny } from "ui/text";

export const Form = styled.form`
  width: 100%;
  display: grid;
  gap: 25px;

  p {
    margin-top: -10px;
    font-size: 18px;
    color: var(--secondary);
  }

  span {
    margin: 0;
  }
`;
export const Input = styled.input`
  margin: 10px 0px;
  padding: 6px;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid var(--gray-100);
  width: 100%;
  outline: none;

  :hover {
    border-bottom: 1px solid var(--primary);
  }
`;

export const Label = styled(Tiny)`
  color: var(--gray-100);
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
`;
