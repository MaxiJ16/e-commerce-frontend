import styled from "styled-components";
import { Tiny } from "ui/text";

export const Label = styled.label`
  position: relative;

  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
export const Input = styled.input`
  width: 100%;
  border-radius: 30px;
  padding: 18px;
  font-weight: 700;
  font-size: 16px;
  border: 2px solid var(--primary);
  margin-top: 3px;
  text-align: center;
`;

export const TextLabel = styled(Tiny)``;
