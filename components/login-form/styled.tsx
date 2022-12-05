import styled from "styled-components";
import { Tiny } from "ui/text";

export const Form = styled.form`
  display: grid;

  p {
    text-align: center;
    margin-top: 14px;
    font-size: 20px;
  }
`;
export const Input = styled.input`
  border-radius: var(--border-radius);
  padding: 9px;
  font-weight: 700;
  font-size: 16px;
  border: 3px solid;
  width: 100%;
  margin-top: 3px;
`;

export const Label = styled(Tiny)``;

export const Span = styled.span`
  color: var(--danger);
  margin-top: 14px;
  text-align: center;
  font-size: 20px;
`;
